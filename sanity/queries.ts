import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id,
  title,
  shortTitle,
  _updatedAt,
  description,
  thumbnail,
  "gallery": gallery[] {
    _type == 'image' => @,
  },
  tags,
  type,
  project,
  "slug": slug.current,
  details,
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);
