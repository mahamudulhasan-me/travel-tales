"use client";
import BtnExplore from "@/components/ui/buttons/BtnExplore";
import BtnSignIn from "@/components/ui/buttons/BtnSignIn";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/Loader";
import { useUser } from "@/context/userProvider";
import { useUserSignIn } from "@/hooks/authHooks";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import SignUpForm from "./SignUpForm";
type Inputs = {
  email: string;
  password: string;
};

export function SignInFormModal({ explore }: { explore?: boolean }) {
  const { isLoading, setIsLoading, setUser } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useRouter();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const {
    mutate: handleUserSignIn,
    data,
    isSuccess,
    isError,
  } = useUserSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    // Example: set an error if email is invalid
    if (!data.email.includes("@")) {
      setError("email", {
        type: "manual",
        message: "Please enter a valid email.",
      });
    }
    handleUserSignIn(data);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    if (isSuccess) {
      navigate.push("/");
      setUser(data?.data);
      toast.success(data?.message);
      setShowModal(false);
    } else if (isError) {
      toast.error("Something went wrong. Please try again.");
      navigate.push("/explore");
    }
    setIsLoading(false);
  }, [isSuccess, data, setIsLoading, setUser, isError, navigate]);

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger asChild>
        <div>{explore ? <BtnExplore /> : <BtnSignIn />}</div>
      </DialogTrigger>
      <DialogContent className="w-full py-10 px-12">
        {isLoading && <Loader />}
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">
            {showSignUpForm ? "Sign Up" : "Sign In"}
          </DialogTitle>
          {showSignUpForm ? (
            <DialogDescription className="text-center text-gray-700">
              <Label>
                Already have an account?{" "}
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => setShowSignUpForm(!showSignUpForm)}
                >
                  Sign in here.
                </span>
              </Label>
            </DialogDescription>
          ) : (
            <DialogDescription className="text-center text-gray-700">
              <Label>
                Don&apos;t have an account?{" "}
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => setShowSignUpForm(!showSignUpForm)}
                >
                  Click here to sign up.
                </span>
              </Label>
            </DialogDescription>
          )}
        </DialogHeader>
        {showSignUpForm ? (
          <SignUpForm />
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-5"
          >
            <input
              placeholder="mahamudulhasan.org@gmail.com"
              className="input-style"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <div className="relative">
              <input
                placeholder="Enter password"
                className="input-style w-full"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
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
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <div className="flex justify-between items-center text-gray-700">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Remember me?</Label>
              </div>
              <Label className="cursor-pointer text-primary">
                Forget password?
              </Label>
            </div>

            <DialogFooter className="mt-5">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-semibold"
              >
                Login
              </button>
            </DialogFooter>
          </form>
        )}

        <div className="space-y-4">
          <button className="border border-gray-300 w-full py-3 rounded-md flex items-center gap-2 justify-center hover:bg-gray-100 transition-colors">
            <Image
              src={"/icons/google-symbol.png"}
              width={24}
              height={24}
              alt={"google"}
            />
            Sign in with Google
          </button>
          <button className="border border-gray-300 w-full py-3 rounded-md flex items-center gap-2 justify-center hover:bg-gray-100 transition-colors">
            <Image
              src={"/icons/facebook.png"}
              width={24}
              height={24}
              alt={"google"}
            />
            Sign in with Facebook
          </button>
        </div>
        <p className="text-center text-gray-700 text-sm">
          &copy; 2024. All rights reserved
        </p>
      </DialogContent>
    </Dialog>
  );
}
