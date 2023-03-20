"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlMagnifier } from "react-icons/sl";
import { IoIosImages } from "react-icons/io";

export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const router = useRouter();
  //console.log(4444, pathName);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function selectTab(tab) {
    router.push(
      `/search/${tab === "All" ? "web" : "image"}?searchTerm=${searchTerm}`
    );
  }

  return (
    <div className="flex space-x-2 select-none border-b-0 justify-center lg:justify-start text-gray-400">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 
        border-b-2 border-transparent active:text-blue-500 
        cursor-pointer pb-3 px-3 ${
          pathName === "/search/web" && "!text-blue-500 !border-green-500"
        }`}
      >
        <SlMagnifier className="text-md" />
        <p className="font-bold"> All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 
        border-b-4 border-transparent active:text-blue-500 
        cursor-pointer pb-3 px-3 ${
          pathName === "/search/image" && "!text-blue-500 !border-green-500"
        }`}
      >
        <IoIosImages className="text-md" />
        <p className="font-bold">Images</p>
      </div>
    </div>
  );
}
