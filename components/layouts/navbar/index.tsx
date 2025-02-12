"use client";

import Grid from "@/components/ui/grid";
import Link from "next/link";

export default function LayoutNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10">
      <Grid className="gap-5">
        <div className="laptop:col-start-1 laptop:col-span-6 p-5 tablet:flex hidden ">
          <Link href="/">Aliocha Boi</Link>
        </div>
        <div className="laptop:col-start-7 pt-5">
          <Link href="/index">Index</Link>
        </div>
        <div className="laptop:col-start-9 pt-5">
          <Link href="/info">Infos</Link>
        </div>
        <div className="laptop:col-start-12 pt-5">
          <Link href="/book">Books</Link>
        </div>
      </Grid>
    </nav>
  );
}
