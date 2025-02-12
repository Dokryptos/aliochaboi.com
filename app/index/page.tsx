import { getProjects } from "@/sanity/queries";
import ProjectList from "@/components/index/ProjectList";

export default async function IndexPage() {
  const projects = await getProjects();

  return <ProjectList projectArray={projects} />;
}
