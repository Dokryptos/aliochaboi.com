"use client";
import type BookType from "@/types/book";

interface BookDataProps {
  bookArray: BookType[];
}

export default function BookComponent({ bookArray }: BookDataProps) {
  console.log(bookArray);
  return (
    <div>
      <div></div>
    </div>
  );
}
