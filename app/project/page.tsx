import { getAllProjects } from "@/sanity/queries";
import ProjectListComponent from "@/components/project/ProjectList";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "white",
};

export default async function IndexPage() {
  const projects = await getAllProjects();

  if (!projects) {
    throw new Error("Aucun projet récupéré");
  }
  return <ProjectListComponent projectArray={projects} />;
}
