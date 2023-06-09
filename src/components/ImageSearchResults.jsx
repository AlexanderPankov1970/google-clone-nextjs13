import Image from "next/image";
import Link from "next/link";
import React from "react";
import PaginationButton from "./PaginationButton";

export default function ImageSearchResults({ results }) {
  // console.log(33333, results);
  return (
    <div className="pb-36 sm:pb-24 mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result) => (
          <>
            <div key={result.link} className="mb-8">
              <div className="group">
                <Link href={result.image.contextLink}>
                  <img
                    src={result.link}
                    alt={result.title}
                    className="h-60 w-full group-hover:shadow-xl object-contain transition-shadow"
                  />
                </Link>
                <Link href={result.image.contextLink}>
                  <h2 className="group-hover:underline truncate text-xl">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className="group-hover:underline truncate text-gray-500">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButton />
      </div>
    </div>
  );
}

{
  /* <Image
                    src={result.link}
                    alt={result.title}
                    width={60}
                    height={60}
                    className="h-60 w-full group-hover:shadow-xl"
                  /> */
}
