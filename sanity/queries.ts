// export const POSTS_QUERY =
//   defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
//   _id,
//   title,
//   shortTitle,
//   _updatedAt,
//   description,
//   thumbnail,
//   "gallery": gallery[] {
//     _type == 'image' => @,
//   },
//   tags,
//   type,
//   project,
//   "slug": slug.current,
//   details,
// }`);

import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import ProjectType from "@/types/project";
import BookType from "@/types/book";
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
  _type == "book"
  && defined(slug.current)
]{_id, title, slug, thumbnail, productBy, details }`);

export async function getBook(): Promise<BookType[]> {
  const { data } = await sanityFetch({ query: BOOK_QUERY });
  return data;
}

export const INDEX_PROJECT_QUERY = defineQuery(`
  {
  "project": *[
    _type == "project" &&
    slug.current == $slug
  ][0]{
  ...,
},
"projectArray": *[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, description, thumbnail, gallery, tags, details, shortTitle }
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
