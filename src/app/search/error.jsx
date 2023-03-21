"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("ERROR:", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-red-500 text-3xl">Some went wrong!!</h1>
      <button
        className="text-white
         cursor-pointer bg-blue-500 rounded-full p-3 hover:text-blue-800"
        onClick={() => reset()}
      >
        TRY AGAIN
      </button>
    </div>
  );
}
