"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Link from "next/link";

export default function PaginationButton() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  //console.log(22222, searchTerm, startIndex);
  return (
    <div className="text-blue-500 flex px-10 pb-4 justify-between">
      {startIndex >= 10 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-row cursor-pointer items-center hover:underline">
            <AiFillCaretLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-row cursor-pointer items-center hover:underline">
            <AiFillCaretRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
