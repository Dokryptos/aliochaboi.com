import ProjectPage from "@/components/slug/ProjectPage";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import type projectType from "@/types/project";
import { Viewport } from "next";

const PROJECT_QUERY = defineQuery(`
  {
    "project": *[
      _type == "project" &&
      slug.current == $slug
    ][0]{
    ...
  },

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

export const viewport: Viewport = {
  themeColor: "white",
};

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug: (await params).slug },
  });
  if (!data) {
    notFound();
  }
  const projectData: projectType = data.project;
  const projectArray: projectType[] = data.projectArray;
  return <ProjectPage projectData={projectData} projectArray={projectArray} />;
}
