import Link from "next/link";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link
          className="hover:underline hover:text-blue-700"
          href={"https://mail.google.com"}
        >
          Gemail
        </Link>
        <Link
          className="hover:underline hover:text-green-700"
          href={"https://image.google.com"}
        >
          Images
        </Link>
        <CgMenuGridO className="bg-transparent hover:bg-gray-300 rounded-full text-4xl p-2" />
        <button className="bg-blue-400 text-white px-6 py-2 font-medium rounded-md hover:brightness-110 hover:shadow-lg transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
