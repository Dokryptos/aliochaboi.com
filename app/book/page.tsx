import { getBook } from "@/sanity/queries";
import BookComponent from "@/components/book";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: 'white',
}

export default async function BookPage() {
  const dataBook = await getBook();
  if (!dataBook) {
    throw new Error("Aucun projet récupéré");
  }
  return <BookComponent bookArray={dataBook} />;
}
