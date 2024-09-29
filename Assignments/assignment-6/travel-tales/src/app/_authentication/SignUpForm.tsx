import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
  return (
    <form className="flex flex-col gap-4 mt-5">
      <input
        placeholder="Enter your full name"
        className="input-style"
        type="text"
      />
      <input
        placeholder="Enter your email address"
        className="input-style"
        type="email"
      />
      <div className="relative">
        <input
          placeholder="Enter password"
          className="input-style w-full"
          type={showPassword ? "text" : "password"}
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
      <div className="relative">
        <input
          placeholder="Confirm password"
          className="input-style w-full"
          type={showConfirmPassword ? "text" : "password"}
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
      <div className="flex items-center space-x-2 text-gray-700">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Keep me signed in</Label>
      </div>
    </form>
  );
};

export default SignUpForm;
