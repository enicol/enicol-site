import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center h-screen p-14 bg-gradient-to-l from-[#716f81] via-[#b97a95] to-[#f6ae99]">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none ">
            <a
              className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 lg:mr-4 text-rich-blue hover:text-saffron"
              href="https://github.com/enicol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="relative mr-4 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-saffron`}"
                src="/github.svg"
                alt="Github Logo"
                width={22}
                height={22}
                priority
              />
            </a>
            <a
              className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:text-sky-700"
              href="https://linkedin.com/in/enicol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="relative mr-4"
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                width={22}
                height={22}
                priority
              />
            </a>
          </div>
        </div>
        <div className="relative flex flex-col place-items-start justify-center align-middle h-full sm:place-items-center">
          <h1 className="mb-2 text-4xl font-semibold text-soft-white sm:text-6xl">
            emma nicol
          </h1>
          <h2 className="mb-3 text-xl font-regular self-center text-soft-white">
            software engineer
          </h2>
        </div>
      </main>
      <SpeedInsights />
    </>
  );
}
