import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Heder */}
      <HomeHeader />
      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"}
          width={250}
          height={100}
          alt="Text Google"
        />
        <HomeSearch />
      </div>
    </>
  );
}
