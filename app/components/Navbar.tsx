"use client";
import Link from "next/link";
import SearchButton from "./SearchButton";
import { Film } from "lucide-react";
export default function Navbar() {
  return (
    <div
      className=" fixed w-screen border-b h-15 border-zinc-200 bg-white/90 px-6 py-4 backdrop-blur-md dark:border-zinc-700 dark:bg-black/90
    "
    >
      <div className="flex">
        <Link href={"/"}>
          <div className="mb-12 flex items-center gap-3">
            {" "}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
              <Film size={22} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Film<span className="text-red-500">Finder</span>
            </span>
          </div>
        </Link>
        <div className="flex w-full justify-end gap-x-6 ">
          <Link
            href={"/"}
            className="border border-red-200 active:scale-95 h-fit w-20 flex justify-center rounded-sm hover:bg-red-400 font-bold"
          >
            Home
          </Link>
          <Link
            href={"/movies"}
            className="border border-red-200 active:scale-95 h-fit w-20 flex justify-center rounded-sm  hover:bg-red-400 font-bold"
          >
            Movies
          </Link>
          {/* <SearchButton /> */}
        </div>
      </div>
    </div>
  );
}
