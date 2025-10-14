"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Image from "next/image";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("callbackUrl");
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    toast.success("Login successful!");
    router.push(redirect || "/dashboard");
  };

  const handleDefaultLogin = (type: "admin" | "user" | "premium") => {
    const presets = {
      admin: { email: "admin1@gmail.com", password: "123456" },
      user: { email: "user10@gmail.com", password: "123456" },
      premium: { email: "premium@gmail.com", password: "123456" },
    };
    const selected = presets[type];
    setValue("email", selected.email);
    setValue("password", selected.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Left Section - Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10">
          <Image
            src="/login-illustration.svg"
            alt="Login Illustration"
            width={400}
            height={400}
            className="mb-6"
          />
          <h2 className="text-3xl font-semibold mb-2">Welcome Back!</h2>
          <p className="text-white/80 text-center max-w-sm">
            Access your account and manage your workspace easily.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 p-8 md:p-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Log in to Your Account
            </h2>
            <Link
              href="/"
              className="text-base font-medium text-indigo-600 hover:text-indigo-700 transition"
            >
              Home
            </Link>
          </div>

          {/* === Role Buttons === */}
          <div className="mb-6 grid grid-cols-3 gap-3">
            <Button
              type="button"
              onClick={() => handleDefaultLogin("user")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              User
            </Button>
            <Button
              type="button"
              onClick={() => handleDefaultLogin("premium")}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Premium
            </Button>
            <Button
              type="button"
              onClick={() => handleDefaultLogin("admin")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Admin
            </Button>
          </div>

          {/* === Form === */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="youremail@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-indigo-600 hover:text-indigo-700"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
