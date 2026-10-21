"use client";
import Link from "next/link";
import SearchButton from "./SearchButton";
import { Film } from "lucide-react";
export default function Navbar() {
  return (
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
        <Link href={"/"}>Home</Link>
        <Link href={"/movies"}>Movies</Link>
        {/* <SearchButton /> */}
      </div>
    </div>
  );
}
