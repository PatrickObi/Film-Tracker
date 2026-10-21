export default async function MovieList({ searchParams }) {
  const { search, year } = await searchParams;
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Pat {searchParams}
    </div>
  );
}
