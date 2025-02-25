"use client";
import Link from "next/link";
import Grid from "@/components/ui/grid/project";
import { useViewMode } from "@/context/ViewModeContext";
import type ProjectType from "@/types/project";
import { UIImageSanity } from "../ui/image/sanity";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ListDesktop from "./ListDesktop";
import ListMobile from "./ListMobile";

interface ProjectListProps {
  projectArray: ProjectType[];
}

export default function ProjectListComponent({
  projectArray,
}: ProjectListProps) {
  const { viewMode } = useViewMode();
  const [hoveredImageId, setHoveredImageId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const gridAnimationVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.2, duration: 1 },
    }),
  };
  return (
    <div
      className="pt-[84px] pl-5 pr-5 font-ppeiko font-thin h-full overflow-y-scroll"
      ref={scrollRef}
    >
      <div>
        {viewMode === "grid" ? (
          <Grid className="gap-x-5">
            {projectArray.map((project: ProjectType, i: number) => (
              <motion.div
                custom={i}
                initial="hidden"
                animate="visible"
                className="mb-10"
                variants={gridAnimationVariant}
                key={project._id}
              >
                <Link
                  className=""
                  href={`/${project?.slug?.current}`}
                  onMouseEnter={() => {
                    setHoveredImageId(project._id);
                  }}
                >
                  <UIImageSanity
                    key={project._id}
                    asset={project.thumbnail.asset}
                    className="pb-3"
                    alt={`Grid image ${project.title}`}
                  />
                  <h2
                    className={`opacity-100 ${hoveredImageId === project._id ? "laptop:opacity-100" : "laptop:opacity-0"}`}
                  >
                    {project?.title}, {project.gallery.length} Images
                  </h2>
                </Link>
              </motion.div>
            ))}
          </Grid>
        ) : (
          <>
            <ListDesktop projectArray={projectArray} />
            <ListMobile projectArray={projectArray} scrollRef={scrollRef} />
          </>
        )}
      </div>
    </div>
  );
}
