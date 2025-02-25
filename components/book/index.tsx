"use client";
import type BookType from "@/types/book";
import { UIImageSanity } from "../ui/image/sanity";
import Link from "next/link";
import Grid from "@/components/ui/grid/index";

interface BookDataProps {
  bookArray: BookType[];
}

export default function BookComponent({ bookArray }: BookDataProps) {
  return (
    <div className="h-dvh overflow-y-scroll w-full pt-[84px] pr-5 pl-5">
      <Grid className="text-[16px]/[21px] tablet:gap-5">
        {bookArray.map((book: BookType) => (
          <div
            key={book._id}
            className="pb-6 col-span-4 tablet:col-span-3 laptop:col-span-4"
          >
            <Link href={book.link}>
              <UIImageSanity
                asset={book.thumbnail.asset}
                className="pb-3"
                alt={`${book.title}`}
              />
              <div>
                <p>
                  {book.title}, {book?.details}
                </p>
                <p>
                  Product by <i>{book.productBy}</i>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Grid>
    </div>
  );
}
