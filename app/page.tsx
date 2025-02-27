import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import HomeComponent from "@/components/home";
import { Viewport } from "next";

const EVENTS_QUERY = defineQuery(`*[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, thumbnail, gallery, shortTitle }`);

export const viewport: Viewport = {
  themeColor: 'white',
}

export default async function HomePage() {
  const { data } = await sanityFetch({ query: EVENTS_QUERY });
  return (
    <main className="font-neueGrotesk">
      <HomeComponent projectData={data} />
    </main>
  );
}
