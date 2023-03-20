"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    console.log(11111, input);
    router.push(`/search/web?searchTerm=${input}`);
    setInput("");
  }
  //VAR 2 My
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    if (!response) return;
    const data = await response.json();
    const results = data[0];
    router.push(`/search/web?searchTerm=${results}`);
    setRandomSearchLoading(false);
  }
  //VAR1 Project
  //   async function randomSearch1() {
  //     const response = await fetch("https://random-word-api.herokuapp.com/word")
  //       .then((res) => res.json())
  //       .then((data) => data[0]);
  //     if (!response) return;
  //     router.push(`/search/web?searchTerm=${response}`);
  //   }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center  mt-5 mx-auto max-w-[90%] border rounded-full px-5 py-3 hover:shadow-md focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <BiSearchAlt2 className="text-xlg text-gray-500 mr-3" />
        <input
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow outline-none"
        />
        <BsFillMicFill className="text-xlg text-gray-500 mr-3" />
      </form>
      <div className="flex flex-col space-y-4 sm:space-y-0 justify-center sm:flex-row mt-6 space-x-0 sm:space-x-4">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          // отключаем кнопку пока идет загрузка и показан спиннер:
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-70"
        >
          {randomSearchLoading ? (
            <Image
              src="spinner.svg"
              alt="Loading..."
              className="h-5 text-center"
              width={20}
              height={20}
            />
          ) : (
            "I am Feelling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
