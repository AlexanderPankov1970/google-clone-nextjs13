import Link from "next/link";
import Image from "next/image";
import React from "react";
import SearchBox from "./SearchBox";
import { RiSettings5Fill } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
            }
            width={120}
            height={50}
            alt="Text Google"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-1">
          <RiSettings5Fill className="header-icons" />
          <CgMenuGridO className="header-icons" />
        </div>
        <button className="bg-blue-400 text-white px-6 py-2 font-medium rounded-md hover:brightness-110 hover:shadow-lg transition-shadow ml-4">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
