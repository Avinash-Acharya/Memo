export default function Memo() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#1a0b2e] to-[#000000] text-white">
      <header className=" basis-1/12 py-6 text-center">
        <h1 className="text-2xl">
          <span className="italic">M</span>E<span className="underline">M</span>
          @
        </h1>
      </header>
      <main className="mx-2 mb-6 flex flex-grow basis-11/12 flex-col overflow-hidden rounded-lg border-4 border-teal-800 border-opacity-10 sm:mx-32">
        <input
          type="text"
          placeholder="Heading..."
          className="h-14 w-full truncate bg-slate-800 bg-opacity-30 indent-5 text-xl outline-none"
        ></input>
        <textarea
          placeholder="Type here...."
          className="text-md h-full w-full flex-grow resize-none scroll-p-4 bg-slate-900 bg-opacity-25 p-6 outline-none "
        ></textarea>
        <button
          type="submit"
          className="bg-slate-900 bg-opacity-50 p-2 text-stone-300 transition duration-200 hover:bg-slate-900"
        >
          Save
        </button>
      </main>
    </div>
  );
}

// h-full w-full bg-red-600 p-2 sm:p-10
