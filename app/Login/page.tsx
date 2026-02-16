"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.email === email && u.password === password,
    );

    if (user) {
      setSuccess("Login successful! Redirecting...");
      // Save current user session if needed
      localStorage.setItem("currentUser", JSON.stringify(user));
      setTimeout(() => {
        router.push("/dashboard/user");
      }, 1500);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="relative w-[1520.83px] h-[798px] bg-[#000000] mx-auto overflow-hidden text-white font-poppins selection:bg-purple-500 selection:text-white">
      {/* Registration Section */}
      <div className="absolute left-[165px] top-[155px] w-[450px]">
        <h1 className="text-[48px] font-semibold leading-[80px] mb-2">Login</h1>
        <p className="text-[18px] font-normal leading-[28px] text-[#9E9E9E] mb-10 w-[420px]">
          A good design is not only aesthetically pleasing, but also functional.
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[420px] h-[48px] bg-[#18181C] rounded-[10px] px-5 outline-none text-white border border-transparent focus:border-[#404047] transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[420px] h-[48px] bg-[#18181C] rounded-[10px] px-5 outline-none text-white border border-transparent focus:border-[#404047] transition-all"
          />

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-1">{success}</p>}

          <button
            type="submit"
            className="w-[180px] h-[48px] mt-2 bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[5px] text-[14px] font-normal hover:opacity-90 transition-opacity"
          >
            Login Now
          </button>

          <p className="mt-4 text-[14px] text-[#9E9E9E]">
            Don't have an account?{" "}
            <Link href="/register" className="text-white hover:underline">
              Register here
            </Link>
          </p>
        </form>

        {/* Social Login */}
        <div className="flex gap-4 mt-12">
          <button className="flex items-center gap-3 w-[200px] h-[48px] bg-[#18181C] rounded-[10px] px-4 hover:bg-[#222228] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] text-[#9E9E9E]">Register with</span>
              <span className="text-[14px]">Google</span>
            </div>
          </button>

          <button className="flex items-center gap-3 w-[200px] h-[48px] bg-[#18181C] rounded-[10px] px-4 hover:bg-[#222228] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                fill="#1DA1F2"
              />
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] text-[#9E9E9E]">Register with</span>
              <span className="text-[14px]">Twitter</span>
            </div>
          </button>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="absolute left-[720px] top-[-184px] w-[694px] h-[1165px]">
        {/* Row 1 */}
        <div className="absolute w-[210px] h-[239px] left-[483px] top-[116px] bg-[#18181C] rounded-[20px]"></div>
        <div className="absolute w-[210px] h-[239px] left-[241px] top-[0px] bg-[#18181C] rounded-[20px]"></div>
        <div className="absolute w-[210px] h-[239px] left-[0px] top-[116px] bg-[#18181C] rounded-[20px]"></div>

        {/* Row 2 */}
        <div className="absolute w-[210px] h-[239px] left-[483px] top-[386px] rounded-[20px] overflow-hidden">
          <img
            src="images/Rectangle 68.png"
            className="w-full h-full object-cover opacity-80"
            alt="Mock"
          />
        </div>
        <div className="absolute w-[210px] h-[239px] left-[241px] top-[270px] bg-[#18181C] rounded-[20px]"></div>
        <div className="absolute w-[210px] h-[239px] left-[0px] top-[386px] rounded-[20px] overflow-hidden">
          <img
            src="images/Rectangle 70.png"
            className="w-full h-full object-cover"
            alt="Victory"
          />
        </div>

        {/* Row 3 */}
        <div className="absolute w-[210px] h-[239px] left-[483px] top-[656px] bg-[#18181C] rounded-[20px]"></div>
        <div className="absolute w-[210px] h-[239px] left-[241px] top-[540px] rounded-[20px] overflow-hidden">
          <img
            src="images/Rectangle 69.png"
            className="w-full h-full object-cover opacity-80"
            alt="Mock"
          />
        </div>
        <div className="absolute w-[210px] h-[239px] left-[0px] top-[656px] bg-[#18181C] rounded-[20px]"></div>

        {/* Row 4 */}
        <div className="absolute w-[210px] h-[239px] left-[483px] top-[926px] bg-[#18181C] rounded-[20px]"></div>
        <div className="absolute w-[210px] h-[239px] left-[241px] top-[810px] bg-[#18181C] rounded-[20px]"></div>
        <div className="absolute w-[210px] h-[239px] left-[0px] top-[926px] bg-[#18181C] rounded-[20px]"></div>
      </div>

      {/* Back to Pricing Link */}
      <Link
        href="/"
        className="absolute top-8 left-8 text-[#9E9E9E] hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
