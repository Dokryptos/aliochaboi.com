"use client";
import Link from "next/link";
import Grid from "@/components/ui/grid/project";
import List from "@/components/ui/list/index";
import { useViewMode } from "@/context/ViewModeContext";
import ProjectType from "@/types/project";
import { UIImageSanity } from "../ui/image/sanity";
import { useState } from "react";

interface ProjectListProps {
  projectArray: ProjectType[];
}

export default function ProjectList({ projectArray }: ProjectListProps) {
  const { viewMode } = useViewMode();
  const [hoveredImage, setHoveredImage] = useState(projectArray[0].thumbnail);
  const [hoveredImageId, setHoveredImageId] = useState(projectArray[0]._id);
  const [hoveredLink, setHoveredLink] = useState(projectArray[0].slug.current);

  return (
    <div className="mt-[84px] pl-5 pr-5 font-ppeiko font-thin">
      <div>
        {viewMode === "grid" ? (
          <Grid className="gap-5">
            {projectArray.map((project: ProjectType) => (
              <div key={project._id}>
                <Link className="" href={`/index/${project?.slug?.current}`}>
                  <UIImageSanity
                    key={project._id}
                    asset={project.thumbnail.asset}
                    className=""
                    alt={`Grid image ${project.title}`}
                  />
                  <h2 className="">{project?.title}</h2>
                </Link>
              </div>
            ))}
          </Grid>
        ) : (
          <List>
            {projectArray.map((project: ProjectType) => (
              <div
                key={project._id}
                onMouseEnter={() => {
                  setHoveredImage(project.thumbnail);
                  setHoveredImageId(project._id);
                  setHoveredLink(project.slug.current);
                }}
              >
                <Link href={`/index/${project?.slug?.current}`}>
                  <h2
                    className={`z-10 flex laptop:text-[42px]/[54px] tablet:text-[25px]/[32px] text-[18px]/[23px]  ${hoveredImageId === project._id ? "text-black" : "text-[#818181]"}`}
                  >
                    {project?.title}
                    <p className="pl-1 pr-1 text-[#818181]">/</p>
                  </h2>
                </Link>
              </div>
            ))}
            <div className="max-h-[450px] max-w-[350px] fixed bottom-0 z-0 right-0 m-5">
              <Link href={`/index/${hoveredLink}`}>
                <UIImageSanity
                  key={hoveredImageId}
                  asset={hoveredImage}
                  alt={`Thumbnail hovered ${hoveredImageId}`}
                  className="object-contain "
                />
              </Link>
            </div>
          </List>
        )}
      </div>
    </div>
  );
}
