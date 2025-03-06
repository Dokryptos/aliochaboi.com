import ProjectListComponent from "@/components/project/ProjectList";
import { Viewport } from "next";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export const viewport: Viewport = {
  themeColor: "white",
};

const PROJECT_QUERY = defineQuery(`
  {
  "projectArray": *[
    _type == "project"
    && defined(slug.current)
  ] | order(orderRank) {
    _id,
    title,
    slug,
    description,
    thumbnail,
    "gallery": gallery[
      asset != null
    ] {
      _type == 'image' => @,
    },
    tags,
    details,
    shortTitle
  }
}
`);

export default async function IndexPage() {
  const { data } = await sanityFetch({ query: PROJECT_QUERY });
  if (!data) {
    throw new Error("Aucun projet récupéré");
  }
  const projectArray = data.projectArray;
  return <ProjectListComponent projectArray={projectArray} />;
}
