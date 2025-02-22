import { getBook } from "@/sanity/queries";
import BookComponent from "@/components/book";

export default async function BookPage() {
  const dataBook = await getBook();
  if (!dataBook) {
    throw new Error("Aucun projet récupéré");
  }
  return <BookComponent bookArray={dataBook} />;
}
