import Link from "next/link";
import Cards from "./_components/cards";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#000000] text-white">
      <header className="pt-6 text-center">
        <h1 className="text-4xl">
          <span className="italic">M</span>E<span className="underline">M</span>
          @
        </h1>
      </header>
      <main className="flex  flex-col items-center justify-center ">
        <Link
          href={`/memo-page`}
          className="w-full max-w-screen-xl p-2 sm:p-10 "
        >
          <Cards />
        </Link>
      </main>
    </div>
  );
}
