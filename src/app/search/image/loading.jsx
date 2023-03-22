import React from "react";

export default function loading() {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="mt-10 pl-20  animate-pulse">
          <div className="h-48 w-48 bg-gray-300 rounded-md mb-2.5"></div>
          <div className="h-2 w-48 bg-gray-300 rounded-full mb-2.5"></div>
          <div className="h-2 w-44 bg-gray-300 rounded-full mb-2.5"></div>
        </div>
        <div className=" mt-10 pl-20 max-w-6xl animate-pulse hidden sm:inline">
          <div className="h-48 w-48 bg-gray-300 rounded-md mb-2.5"></div>
          <div className="h-2 w-48 bg-gray-300 rounded-full mb-2.5"></div>
          <div className="h-2 w-44 bg-gray-300 rounded-full mb-2.5"></div>
        </div>
        <div className=" mt-10 pl-20 max-w-6xl animate-pulse hidden sm:inline">
          <div className="h-48 w-48 bg-gray-300 rounded-md mb-2.5"></div>
          <div className="h-2 w-48 bg-gray-300 rounded-full mb-2.5"></div>
          <div className="h-2 w-44 bg-gray-300 rounded-full mb-2.5"></div>
        </div>
      </div>
    </>
  );
}
