"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useUserSignUp } from "@/hooks/authHooks";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  keepSignedIn: boolean;
};

const SignUpForm = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const { mutate: handleUserSignUp, isSuccess, isError } = useUserSignUp();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle successful form submission
    const signUpInfo = {
      name: data.fullName,
      email: data.email,
      password: data.password,
      role: "user",
      status: "Basic",
    };
    handleUserSignUp(signUpInfo);
  };

  // Watch for password and confirmPassword to validate they match
  const password = watch("password");

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
      });
    }
    if (isError) {
      toast({
        title: "Error",
        description: "Something went wrong.",
      });
    }
  }, [isSuccess, isError, toast]);

  return (
    <form
      className="flex flex-col gap-4 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Full Name */}
      <input
        placeholder="Enter your full name"
        className="input-style"
        type="text"
        {...register("fullName", { required: "Full Name is required" })}
      />
      {errors.fullName && (
        <span className="text-red-500 text-sm">{errors.fullName.message}</span>
      )}

      {/* Email */}
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
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}

      {/* Password */}
      <div className="relative">
        <input
          placeholder="Enter password"
          className="input-style w-full"
          type={showPassword ? "text" : "password"}
          {...register("password", {
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
            className="absolute top-1/2 -translate-y-1/2 right-3"
          />
        )}
      </div>
      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}

      {/* Confirm Password */}
      <div className="relative">
        <input
          placeholder="Confirm password"
          className="input-style w-full"
          type={showConfirmPassword ? "text" : "password"}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
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
            className="absolute top-1/2 -translate-y-1/2 right-3"
          />
        )}
      </div>
      {errors.confirmPassword && (
        <span className="text-red-500 text-sm">
          {errors.confirmPassword.message}
        </span>
      )}

      {/* Keep me signed in */}
      <div className="flex items-center space-x-2 text-gray-700">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Keep me signed in</Label>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-md font-semibold"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
