import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{
        backgroundImage: "url(./bg-portfolio.jpg)"
      }}>
        <div className="pl-20 md:pl-40 pd:56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[770px]">
          <h1 className=" text-[35px] text-white font-semibold">
            Crafting Digital Dreams into Reality: <br />
            <span className=" text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Full Stack Brilliance <br />
            </span>
            at your service.
          </h1>
          <p className="text-gray-300 hidden md:block">
            I'm a Fullstack Developer based in India, proficient in modern frameworks for crafting comprehensive applications. Passionate about coding, debugging, and constantly learning. I also have a keen interest in financial markets, trading, and cybersecurity.
          </p>
          <div className="flex-col md:flex-row hidden md:flex">

          </div>
        </div>

      </div>
    </main>
  )
}
