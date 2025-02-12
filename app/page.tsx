import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import Intro from "@/components/intro";
import Home from "@/components/home";
import { Suspense } from "react";

const EVENTS_QUERY = defineQuery(`*[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, thumbnail, gallery, shortTitle }`);

export default async function HomePage() {
  const { data } = await sanityFetch({ query: EVENTS_QUERY });
  return (
    <main className="font-neueGrotesk">
      <Intro />
      <Suspense fallback={<p>En cours de chargement...</p>}>
        <Home projectData={data} />
      </Suspense>
    </main>
  );
}
