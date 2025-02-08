"use client";

import Link from "next/link";

export default function LayoutNavbar() {
  return (
    <nav className="flex fixed p-4">
      <div>
        <Link href="/">Aliocha Boi</Link>
      </div>
      <div>
        <Link href="/index">Index</Link>
        <Link href="/info">Infos</Link>
        <Link href="/book"></Link>
      </div>
    </nav>
  );
}
