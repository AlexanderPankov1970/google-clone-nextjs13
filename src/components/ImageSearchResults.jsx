import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ImageSearchResults({ results }) {
  // console.log(33333, results);
  return (
    <div className="pb-24 mt-3">
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
                  {/* <Image
                    src={result.link}
                    alt={result.title}
                    width={60}
                    height={60}
                    className="h-60 w-full group-hover:shadow-xl"
                  /> */}
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
    </div>
  );
}
{
  /* <div className="group flex flex-col">
                <Link className="text-8 truncate" href={result.link}>
                  {result.formattedUrl}
                </Link>
                <Link
                  className="group-hover:underline decoration-blue-500 text-xl truncate font-medium text-blue-500"
                  href={result.link}
                >
                  {result.title}
                </Link>
              </div>
              <p className="text-gray-500">{Parser(result.htmlSnippet)}</p> */
}
