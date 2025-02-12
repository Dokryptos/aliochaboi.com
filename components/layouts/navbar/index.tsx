"use client";

import Grid from "@/components/ui/grid";
import Link from "next/link";

export default function LayoutNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10">
      <Grid className="gap-5">
        <div className="laptop:col-start-1 laptop:col-span-6 tablet:col-span-4 pl-5 tablet:flex hidden ">
          <Link className="pt-5 pb-5" href="/">
            Aliocha Boi
          </Link>
        </div>
        <div className="laptop:col-start-7 tablet:col-start-5 flex col-start-1 col-span-2 pl-5 tablet:pl-0">
          <Link className="pt-5 pb-5" href="/index">
            Index
          </Link>
        </div>
        <div className="laptop:col-start-9 tablet:col-start-7 flex col-start-3">
          <Link className="pt-5 pb-5" href="/info">
            Infos
          </Link>
        </div>
        <div className="laptop:col-start-12 tablet:col-start-9 col-start-4 pr-5 flex justify-end">
          <Link className="pt-5 pb-5" href="/book">
            Books
          </Link>
        </div>
      </Grid>
    </nav>
  );
}
