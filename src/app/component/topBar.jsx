"use client";

import Image from "next/image";
import {useState} from "react";

const TopBar = ({onTitleChange}) => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onTitleChange(newTitle);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center p-[30px]">
        <h1 className="font-bold text-[24px]">BlogVibe</h1>
        <div className="relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 w-[300px] px-5 pr-16 rounded-full text-sm focus:outline-none"
            name="search"
            placeholder="Search"
            autoComplete="off"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <Image
            src="/assets/user1.png"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
