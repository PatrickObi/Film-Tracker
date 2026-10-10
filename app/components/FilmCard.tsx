export default function FilmCard() {
  return (
    <div
      className="border p-10
      flex flex-col items-center justify-center gap-4 m-4"
    >
      <img
        src="https://images.pexels.com/photos/38775159/pexels-photo-38775159.jpeg"
        alt="Movie image"
        className="w-50 h-50 object-cover"
      />
      <h3>Movie Name</h3>
    </div>
  );
}
