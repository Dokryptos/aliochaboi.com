"use client";

import Grid from "@/components/ui/grid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LayoutNavbar() {
  const pathname = usePathname(); // Récupère la route actuelle
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const bgColor =
    pathname === "/info" ? "bg-themeColor" : "bg-white transition-colors";

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 ${bgColor}`}>
      <Grid className="gap-5">
        <div className="laptop:col-start-1 laptop:col-span-6 tablet:col-span-4 pl-5 tablet:flex hidden ">
          <Link className="pt-5 pb-10" href="/">
            Aliocha Boi
          </Link>
        </div>

        <div className="laptop:col-start-7 tablet:col-start-5 flex col-start-1 col-span-2 pl-5 tablet:pl-0">
          <Link className="pt-5 pb-10" href="/index">
            Index
          </Link>
          {/* Affichage du Toggle List/Grid uniquement sur la page Project */}
          {pathname.includes("/index") && (
            <div className="pt-5 pl-3 pb-10 text-[10px] flex items-center">
              <button
                className={` pr-1 ${
                  viewMode === "list" ? "text-black" : "text-[#818181]"
                }`}
                onClick={() => setViewMode("list")}
              >
                List
              </button>
              /
              <button
                className={`pl-1 ${
                  viewMode === "grid" ? "text-black" : "text-[#818181]"
                }`}
                onClick={() => setViewMode("grid")}
              >
                Grid
              </button>
            </div>
          )}
        </div>

        <div className="laptop:col-start-9 tablet:col-start-7 flex col-start-3">
          <Link className="pt-5 pb-10" href="/info">
            Infos
          </Link>
        </div>

        <div className="laptop:col-start-12 tablet:col-start-9 col-start-4 pr-5 flex justify-end">
          <Link className="pt-5 pb-10" href="/book">
            Books
          </Link>
        </div>
      </Grid>
    </nav>
  );
}
