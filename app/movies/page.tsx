"use client";

import { useState } from "react";
import movies from "../datalist/movies.json";
import FilmCard from "../components/FilmCard";

export default function Movies() {
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const filteredMovies = movies.filter((movie) =>
    String(movie.original_title ?? "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const allGenres = [
    ...new Set(
      movies.flatMap((movie) =>
        String(movie.genres ?? "")
          .split(" ")
          .filter(Boolean)
      )
    ),
  ];
  return (
    <div
      className=" mt-20 m-10
    "
    >
      {/* Search field */}
      <div className="">
        {" "}
        <h1 className="font-bold text-3xl">Discover Movies</h1>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          Search your favorite movies
        </p>
      </div>

      <div className="mt-4 gird">
        {" "}
        <label
          htmlFor="search"
          className="mb-6 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base"
        >
          Search Movies
        </label>{" "}
        <input
          type="text"
          name="search"
          className="border rounded-lg w-full h-10"
          placeholder="Try Spider-Man, The Batman, The Flash, etc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Genre select */}

      <div className="relative w-70">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-lg border border-zinc-300 bg-white px-4 py-2 text-left text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        >
          <span>
            {genres.length === 0 ? "All Genres" : `${genres.length} selected`}
          </span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-zinc-200 bg-white p-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            {allGenres.map((genreOption) => (
              <label
                key={genreOption}
                className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <input
                  type="checkbox"
                  checked={genres.includes(genreOption)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setGenres((prev) => [...prev, genreOption]);
                    } else {
                      setGenres((prev) =>
                        prev.filter((item) => item !== genreOption)
                      );
                    }
                  }}
                />
                <span>{genreOption}</span>
              </label>
            ))}

            <button
              type="button"
              onClick={() => setGenres([])}
              className="mt-2 w-full rounded-md border-t border-zinc-200 px-3 py-2 text-sm text-blue-600 dark:border-zinc-700"
            >
              Clear selections
            </button>
          </div>
        )}
      </div>

      {/* Movie List */}
      <div className="">
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          {filteredMovies.length} Movies found
        </p>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredMovies.map((movie) => (
              <FilmCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              No movies found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
