import React from "react";
import Link from "next/link";
import Image from "next/image";

function HomePage() {
  return (
    <div
      className="flex items-center w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url(./bg-portfolio.jpg)",
      }}
    >
      {/* <Image src="./stars.png" alt="stars" height={100} width={500} className="border z-[0] max-w-[700px] absolute"/> */}
      <div className="pl-20 pr-20 md:pl-40 pd:56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[770px]">
        <h1 className=" text-[35px] text-white font-semibold">
          Crafting Digital Dreams into Reality: <br />
          <span className=" text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Full Stack Brilliance <br />
          </span>
          at your service.
        </h1>
        <p className="text-gray-300">
          I am a Fullstack Developer based in India, proficient in modern
          frameworks for crafting comprehensive applications. Passionate about``
          coding, debugging, and constantly learning. I also have a keen
          interest in financial markets, trading, and cybersecurity.
        </p>
        <div className="flex-col gap-2 md:flex-row hidden md:flex">
          <Link href="/about">
            <div className="text-lg rounded-[10px] group bg-zinc-600 hover:bg-gradient-to-r from-purple-700 to-cyan-700  px-4 py-2   text-white max-w-[200px]">
              About
            </div>
          </Link>
          <Link href="/projects">
            <div className="text-lg rounded-[10px] group bg-zinc-600 hover:bg-gradient-to-r from-purple-700 to-cyan-700  px-4 py-2   text-white max-w-[200px]">
              Projects
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-lg rounded-[10px] group bg-zinc-600 hover:bg-gradient-to-r from-purple-700 to-cyan-700  px-4 py-2   text-white max-w-[200px]">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
