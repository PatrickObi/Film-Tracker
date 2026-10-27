export default function Home() {
  return (
    // <div className="active:scale-95 rounded-lg bg-blue-500 p-6 text-white">
    //   Loading...
    // </div>
    // <div className="rotate-3 scale-105 rounded-lg bg-purple-600 p-6 text-white transition hover:rotate-0">
    //   Transform demo
    // </div>
    // <button className="cursor-pointer select-none rounded-lg bg-indigo-600 px-4 py-2 text-white">
    //   Select or click
    // </button>

    <div>
      <label htmlFor="movie-search" className="sr-only">
        Search movies
      </label>

      <input
        id="movie-search"
        type="search"
        placeholder="Search movies..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-blue-500"
      />
    </div>
  );
}
