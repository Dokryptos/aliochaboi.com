import { getAllProjects } from "@/sanity/queries";
import ProjectList from "@/components/index/ProjectList";

export default async function IndexPage() {
  const projects = await getAllProjects();

  return <ProjectList projectArray={projects} />;
}
