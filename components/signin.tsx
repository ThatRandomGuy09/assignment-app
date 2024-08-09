"use client";
import Image from "next/image";
import { ModeToggle } from "./toggle-mode";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const defaultEmail = "demo@example.com";
  const defaultPassword = "password123";

  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      router.push("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Default sign-in error:", error);
    }
  };
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="hidden md:flex flex-1 bg-blue-600 justify-center items-center p-6">
        <div className="relative w-full h-full bg-[#605BFF] rounded-lg flex justify-center items-center">
          <div className="relative w-[80%] h-[80%] bg-[#B7E9F640] rounded-lg flex flex-col justify-center items-start">
            <div className="absolute top-4 left-4 bg-white p-2 rounded-lg flex items-center">
              <Image
                src="/logoo.png"
                alt="Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-white font-bold font-montserrat">Base</span>
            </div>

            <div className="flex flex-col items-start mt-12 justify-center p-8">
              <h1 className="text-white text-5xl font-bold mb-12 font-lato">
                Generate detailed reports with just one click
              </h1>

              <div className="flex items-center justify-between w-full mt-8">
                <ModeToggle />
                <Image
                  src="/mainn.png"
                  alt="Sample Image"
                  width={170}
                  height={150}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 sm:flex-2 bg-gray-900 flex flex-col justify-center items-center md:w-3/4">
        {/* Header for Mobile */}
        <div className="w-full bg-[#346BD4] mb-12  md:hidden flex items-center justify-center">
          <span className="text-white font-bold font-montserrat text-2xl">
            Base
          </span>
        </div>

        <div className="w-3/4">
          <h2 className="text-white text-4xl font-bold mb-4">Sign In</h2>
          <h4 className="text-white text-2xl font-semibold mb-8">
            Sign in to your account
          </h4>
          <div className="flex">
            <button
              onClick={handleGoogleSignIn}
              className="w-full mb-4 py-2 bg-gray-700 text-gray-300 font-semibold rounded-lg flex items-center justify-center"
            >
              <Image
                src="/google.png"
                alt="Google"
                className="w-6 h-6 mr-4"
                width={24}
                height={24}
              />
              Sign in with Google
            </button>
            <button className="w-full mb-8 py-2 bg-gray-700 text-gray-300 font-semibold rounded-lg flex items-center justify-center">
              <Image
                src="/apple.png"
                alt="Apple"
                className="w-6 h-6 mr-4"
                width={24}
                height={24}
              />
              Sign in with Apple
            </button>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="mb-6">
              <label
                className="block text-gray-400 mb-2 font-bold"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-400 mb-2 font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a
                href="#"
                className="text-[#346BD4] font-bold text-sm mt-2 block"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#346BD4] text-white font-bold rounded-lg"
            >
              Sign In
            </button>
            <p className="text-gray-400 mt-4">
              Don’t have an account?{" "}
              <a href="#" className="text-[#346BD4] font-bold">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
