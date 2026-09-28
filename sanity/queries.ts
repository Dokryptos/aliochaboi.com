import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import BookType from "@/types/book";
import InfoType from "@/types/info";

export const BOOK_QUERY = defineQuery(`*[
  _type == "book"] | order(orderRank)
  {_id, title, slug, thumbnail, published, details, link }`);

export async function getBook(): Promise<BookType[]> {
  const { data } = await sanityFetch({ query: BOOK_QUERY });
  return data;
}

export const INFO_QUERY = defineQuery(`*[
  _type == "info"][0]{ themeColor, bio, clients, publications }`);

export async function getInfo(): Promise<InfoType> {
  const { data } = await sanityFetch({ query: INFO_QUERY });
  return data;
}
