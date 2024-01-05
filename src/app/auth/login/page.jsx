"use client";
import {useState} from "react";
import HeroSection from "@/app/component/herosection";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex phone:flex-col tablet:flex-col laptop:flex-row desktop:flex-row h-screen">
      <HeroSection />
      <div className="w-2/5 flex flex-col justify-center items-center p-10 space-y-10 phone:space-y-5 phone:w-screen tablet:w-screen">
        <div className="w-full flex flex-col space-y-3">
          <label
            htmlFor="email"
            className="text-black phone:text-[16px] text-[20px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            className="w-full h-[50px] tablet:h-[70px] border-[1px] border-[#457b9d] rounded-[15px] p-6"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col space-y-3">
          <label
            htmlFor="password"
            className="text-black phone:text-[16px] text-[20px]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            className="w-full h-[50px] tablet:h-[70px] border-[1px] border-[#457b9d] rounded-[15px] p-6"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onSubmit={(e) => e.preventDefault()}
            onClick={submit}
            className="phone:text-[16px] text-[24px] phone:h-[50px] w-[200px] h-[60px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <Link href="/home_screen/">Login</Link>
          </button>
        </div>
        <div>
          <p className="phone:text-[16px] text-[20px]">
            {"Don't have an account? "}
            <Link href="/auth/signup/">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
