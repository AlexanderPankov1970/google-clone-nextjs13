import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import React from "react";

export default async function ImageSearchPage({ searchParams }) {
  //console.log(3333, searchParams.searchTerm);
  const startIndex = searchParams.start || "1";
  //gg26 30 min:
  //это предотвратит получение данных при каждом сохранении:
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong! Check request!");
  }
  const data = await response.json();
  // console.log(55555, data);
  const results = data.items;
  // console.log(777, results[0].title);
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching something else or go back to the
          <Link className="text-blue-500 ml-2" href={"/"}>
            Homepage
          </Link>
        </p>
      </div>
    );
  }

  return (
    // <>
    //   {!!results &&
    //     results.map((result) => <h1 key={result.title}>{result.title}</h1>)}
    // </>
    <>{!!results && <ImageSearchResults results={data} />}</>
  );
}
