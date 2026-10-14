import FilmCard from "../components/FilmCard";
import movies from "../datalist/movies.json";

export default function MovieList() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans dark:bg-black px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <FilmCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
