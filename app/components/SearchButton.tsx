"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchIcon() {
  const Router = useRouter();
  return (
    <button
      onClick={() => Router.push("/search")}
      type="button"
      aria-label="Search"
      className="p-2 rounded-full hover:bg-gray-200 transition"
    >
      <Search size={24} className="text-gray-700" />
    </button>
  );
}
