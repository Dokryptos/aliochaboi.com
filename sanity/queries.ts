import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import ProjectType from "@/types/project";
import BookType from "@/types/book";
import InfoType from "@/types/info";
import { notFound } from "next/navigation";

export const INDEX_QUERY = defineQuery(`*[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, thumbnail, gallery, shortTitle }`);

// Fonction pour récupérer les projets (Serveur)
export async function getAllProjects(): Promise<ProjectType[]> {
  const { data } = await sanityFetch({ query: INDEX_QUERY });
  return data;
}

export const BOOK_QUERY = defineQuery(`*[
  _type == "book"] | order(orderRank)
  {_id, title, slug, thumbnail, published, details, link }`);

export async function getBook(): Promise<BookType[]> {
  const { data } = await sanityFetch({ query: BOOK_QUERY });
  return data;
}

const GALLERY_PROJECTION = `gallery[]{
  ...,
  _type == "video" => {
    "asset": asset->{playbackId, status}
  }
}`;

export const INDEX_PROJECT_QUERY = defineQuery(`
  {
  "project": *[
    _type == "project" &&
    slug.current == $slug
  ][0]{
  ...,
  ${GALLERY_PROJECTION}
},
"projectArray": *[
  _type == "project"
  && defined(slug.current)
] | order(orderRank) {_id, title, slug, description, thumbnail, ${GALLERY_PROJECTION}, tags, details, shortTitle }
}
`);

export async function getProject({ params }: { params: { slug: string } }) {
  const { data } = await sanityFetch({
    query: INDEX_PROJECT_QUERY,
    params: { slug: params.slug },
  });
  if (!data) {
    notFound();
  }
  return data;
}

export const INFO_QUERY = defineQuery(`*[
  _type == "info"][0]{ themeColor, bio, clients, publications }`);

export async function getInfo(): Promise<InfoType> {
  const { data } = await sanityFetch({ query: INFO_QUERY });
  return data;
}
