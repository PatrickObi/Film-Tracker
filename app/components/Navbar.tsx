"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex w-full justify-end gap-x-6 ">
      <Link href={"/"}>Home</Link>
      <Link href={"/movies"}>Movies</Link>
    </div>
  );
}
