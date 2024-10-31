"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useForgetPassword } from "@/hooks/authHooks";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
// Import the toast library

type FormValues = {
  email: string;
  newPassword: string;
  confirmPassword: string;
};

const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog open/close
  const { mutate: handleForgetPassword, isSuccess } = useForgetPassword();

  // Toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit: handleForgetPasswordSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  // Watch for password and confirmPassword to validate they match
  const newPassword = watch("newPassword");

  const forgetPasswordSubmitHandler: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true);

    const resetPasswordData = {
      email: data.email,
      password: data.newPassword,
    };
    handleForgetPassword(resetPasswordData, {
      onSuccess: () => {
        setIsLoading(false);
        toast.success("Password changed successfully!"); // Show success toast
        setIsDialogOpen(false); // Close modal on success
      },
      onError: () => {
        setIsLoading(false);
        toast.error("Failed to change password. Please try again.");
      },
    });
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {" "}
        {/* Control dialog state */}
        <DialogTrigger asChild>
          <Label className="cursor-pointer text-primary">
            Forget password?
          </Label>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Forget password?</DialogTitle>
            <DialogDescription>
              For resetting your password please enter your email address below.
              Click change password when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <form className="flex flex-col gap-4 mt-5">
            {/* Email Input */}
            <input
              placeholder="Enter your email address"
              className="input-style"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            {/* New Password Input */}
            <div className="relative">
              <input
                placeholder="Enter new password"
                className="input-style w-full"
                type={showPassword ? "text" : "password"}
                {...register("newPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {showPassword ? (
                <EyeOff
                  onClick={togglePassword}
                  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={togglePassword}
                  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                />
              )}
            </div>
            {errors.newPassword && (
              <span className="text-red-500 text-sm">
                {errors.newPassword.message}
              </span>
            )}

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                placeholder="Confirm new password"
                className="input-style w-full"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
              />
              {showConfirmPassword ? (
                <EyeOff
                  onClick={toggleConfirmPassword}
                  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={toggleConfirmPassword}
                  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                />
              )}
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}

            {/* Submit Button */}
            <button
              disabled={isLoading}
              onClick={handleForgetPasswordSubmit(forgetPasswordSubmitHandler)}
              className="w-full bg-primary text-white py-3 rounded-md font-semibold"
            >
              {isLoading ? "Changing Password..." : "Change Password"}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ForgetPassword;
