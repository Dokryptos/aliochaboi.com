"use client";

import Link from "next/link";

export default function LayoutNavbar() {
  return (
    <nav className="flex fixed top-0 left-0 p-5 w-full bg-white z-10">
      <div className="w-[50%] tablet:flex hidden">
        <Link href="/">Aliocha Boi</Link>
      </div>
      <div className="flex justify-between tablet:w-[50%] w-full">
        <Link href="/index">Index</Link>
        <Link
          href="/info"
          className="ml-[37px] laptop:ml-0 laptop:mr-[100px] tablet:mr-[18px]"
        >
          Infos
        </Link>
        <Link href="/book">Books</Link>
      </div>
    </nav>
  );
}
