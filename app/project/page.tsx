import { getAllProjects } from "@/sanity/queries";
import ProjectList from "@/components/index/ProjectList";

export default async function IndexPage() {
  const projects = await getAllProjects();
  console.log("Projets récupérés :", projects);

  if (!projects) {
    throw new Error("Aucun projet récupéré");
  }
  return <ProjectList projectArray={projects} />;
}
