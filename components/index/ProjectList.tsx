"use client";
import Link from "next/link";
import Grid from "@/components/ui/grid/project";
import List from "@/components/ui/list/index";
import { useViewMode } from "@/context/ViewModeContext";
import ProjectType from "@/types/project";

interface ProjectListProps {
  projectArray: ProjectType[];
}

export default function ProjectList({ projectArray }: ProjectListProps) {
  const { viewMode } = useViewMode();
  return (
    <div className="mt-[84px] pl-5 pr-5">
      <div className="">
        {viewMode === "grid" ? (
          <Grid>
            {projectArray.map((project: ProjectType) => (
              <div key={project._id}>
                <Link className="" href={`/index/${project?.slug?.current}`}>
                  <h2 className="">{project?.title}/</h2>
                </Link>
              </div>
            ))}
          </Grid>
        ) : (
          <List>
            {projectArray.map((project: ProjectType) => (
              <div key={project._id}>
                <Link className="" href={`/index/${project?.slug?.current}`}>
                  <h2 className="">{project?.title}/</h2>
                </Link>
              </div>
            ))}
            <div></div>
          </List>
        )}
      </div>
    </div>
  );
}
