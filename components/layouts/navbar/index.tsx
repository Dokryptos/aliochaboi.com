"use client";

import Grid from "@/components/ui/grid";
import { useViewMode } from "@/context/ViewModeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LayoutNavbar() {
  const pathname = usePathname();
  const { viewMode, setViewMode } = useViewMode();

  const bgColor = pathname === "/info" ? "bg-principal" : "bg-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 font-neueGrotesk text-[15px]/5 laptop:text-[20px]/[26px]   ${bgColor}`}
    >
      <Grid className="gap-5">
        <div className="laptop:col-start-1 laptop:col-span-6 tablet:col-span-4 pl-5 tablet:flex hidden ">
          <Link className="pt-5 pb-10" href="/">
            Aliocha Boi
          </Link>
        </div>

        <div className="laptop:col-start-7 tablet:col-start-5 flex col-start-1 col-span-2 pl-5 tablet:pl-0">
          <Link
            className={` pt-5 pb-10 ${pathname.includes("/project") ? "italic" : "not-italic"}`}
            href="/project"
          >
            Index
          </Link>

          {/* Affichage du Toggle List/Grid uniquement sur la page Project */}
          {pathname.includes("/project") && (
            <div className="pt-5 pl-3 pb-10 font-ppeiko text-[10px] laptop:text-[12px] flex items-center">
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
          <Link
            className={` pt-5 pb-10 ${pathname.includes("/info") ? "italic" : "not-italic"}`}
            href="/info"
          >
            Infos
          </Link>
        </div>

        <div className="laptop:col-start-12 tablet:col-start-9 col-start-4 pr-5 flex justify-end">
          <Link
            className={` pt-5 pb-10 ${pathname.includes("/book") ? "italic" : "not-italic"}`}
            href="/book"
          >
            Books
          </Link>
        </div>
      </Grid>
    </nav>
  );
}
