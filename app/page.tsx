import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import HomeComponent from "@/components/home";

const EVENTS_QUERY = defineQuery(`*[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, thumbnail, gallery, shortTitle }`);

export default async function HomePage() {
  const { data } = await sanityFetch({ query: EVENTS_QUERY });
  return (
    <main className="font-neueGrotesk">
      <HomeComponent projectData={data} />
    </main>
  );
}
