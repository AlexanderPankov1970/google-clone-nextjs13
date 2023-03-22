import Link from "next/link";
import React from "react";
import Parser from "html-react-parser";
import PaginationButton from "./PaginationButton";

export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-500 text-sm mb-5 mt-3 ">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime}seconds)
      </p>
      {results.items?.map((result) => (
        <>
          <div className="mb-8 max-w-xl" key={result.link}>
            <div className="group flex flex-col">
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
            <p className="text-gray-500">{Parser(result.htmlSnippet)}</p>
          </div>
        </>
      ))}
      <PaginationButton />
    </div>
  );
}
