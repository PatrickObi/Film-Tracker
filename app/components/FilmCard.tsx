"use client";
import { useRouter } from "next/navigation";
export default function FilmCard({ movie }) {
  const router = useRouter();
  return (
    <div
      className="border p-10
      flex flex-col items-center justify-center gap-4 m-4"
      onClick={() => {
        router.push(`/movies/${movie.id}`);
      }}
    >
      {/* <img
        src="https://images.pexels.com/photos/38775159/pexels-photo-38775159.jpeg"
        alt="Movie image"
        className="w-32 sm:w-40 md:w-48 lg:w-full aspect-[2/3] object-cover rounded-lg"
      /> */}
      <h3 className="font-bold">{movie.title}</h3>
      <h3 className="font-bold"> Genre: {movie.genres}</h3>
      <h3 className="font-bold"> Desc: {movie.keywords}</h3>
    </div>
  );
}
