import React from "react";

export default async function WebSearchPage({ searchParams }) {
  //console.log(3333, searchParams.searchTerm);
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  // console.log(55555, data);
  const results = data.items;
  // console.log(777, results[0].title);

  return (
    <>
      {!!results &&
        results.map((result) => <h1 key={result.title}>{result.title}</h1>)}
    </>
  );
}
