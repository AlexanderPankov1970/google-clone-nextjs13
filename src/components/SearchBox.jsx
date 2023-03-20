"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm, "");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return; //<--предотвращаем отправку пустого запроса или пробела
    router.push(`/search/web?searchTerm=${term}`);
    setTerm("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-400 
    rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl"
    >
      <input
        type="text"
        className="w-full focus:outline-0"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <BsFillMicFill className="hidden sm:inline-flex text-2xl text-blue-500 border-l-2 border-gray-500 mr-3" />
      <SlMagnifier
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
}
