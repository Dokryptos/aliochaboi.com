import { getAllProjects } from "@/sanity/queries";
import ProjectList from "@/components/project/ProjectList";

export default async function IndexPage() {
  const projects = await getAllProjects();

  if (!projects) {
    throw new Error("Aucun projet récupéré");
  }
  return <ProjectList projectArray={projects} />;
}
