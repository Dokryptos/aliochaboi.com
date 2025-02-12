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

export const INDEX_QUERY = defineQuery(`*[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, thumbnail, gallery, shortTitle }`);

// Fonction pour récupérer les projets (Serveur)
export async function getProjects(): Promise<ProjectType[]> {
  const { data } = await sanityFetch({ query: INDEX_QUERY });
  return data;
}

export const BOOK_QUERY = defineQuery(`*[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, thumbnail, gallery, shortTitle }`);

export async function getBook(): Promise<ProjectType[]> {
  const { data } = await sanityFetch({ query: BOOK_QUERY });
  return data;
}
