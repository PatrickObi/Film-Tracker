"use client";

import { useState } from "react";
import FilmCard from "../components/FilmCard";
import movies from "../datalist/movies.json";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <label htmlFor="text">Enter search: </label>
      <input
        type="text"
        className="border"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {movies
          .filter((movie) =>
            String(movie.original_title)
              .replace(/[\s-]+/g, " ")
              .toLowerCase()
              .includes(search.toLowerCase().replace(/[\s-]+/g, " "))
          )
          .map((movie) => (
            <FilmCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}
