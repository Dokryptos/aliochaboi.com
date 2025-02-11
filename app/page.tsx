import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import Navbar from "@/components/layouts/navbar";
import Intro from "@/components/intro";
import Home from "@/components/home";

const EVENTS_QUERY = defineQuery(`*[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, description, thumbnail, gallery, tags, details, shortTitle }`);

export default async function HomePage() {
  const { data } = await sanityFetch({ query: EVENTS_QUERY });
  console.log(data);
  return (
    <main className="">
      <Intro />
      <Navbar />
      <Home />
    </main>
  );
}
