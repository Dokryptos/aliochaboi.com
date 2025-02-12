import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import ProjectType from "@/types/project";

const EVENTS_QUERY = defineQuery(`*[
  _type == "project"
  && defined(slug.current)
]{_id, title, slug, thumbnail, gallery, shortTitle }`);

export default async function IndexPage() {
  const { data } = await sanityFetch({ query: EVENTS_QUERY });
  return (
    <div className="mt-[84px]">
      <div className="flex">
        {data.map((project: ProjectType) => (
          <div key={project._id}>
            <Link className="" href={`/index/${project?.slug?.current}`}>
              <h2 className="">{project?.title}/</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
