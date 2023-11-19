import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2 ">
        <li>
          <Link
            className="text-orange-800 hover:underline font-orbitron"
            href={"/"}
          >
            Indie Gamer
          </Link>
        </li>
        <li>
          <Link className="text-orange-800 hover:underline" href={"/reviews"}>
            Reviews
          </Link>
        </li>
        <li>
          <Link
            className="text-orange-800 hover:underline"
            href={"/about"}
            prefetch={false}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
