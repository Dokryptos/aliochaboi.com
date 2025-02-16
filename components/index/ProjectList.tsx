"use client";
import Link from "next/link";
import Grid from "@/components/ui/grid/project";
import List from "@/components/ui/list/index";
import { useViewMode } from "@/context/ViewModeContext";
import ProjectType, { SanityImage } from "@/types/project";
import { UIImageSanity } from "../ui/image/sanity";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectListProps {
  projectArray: ProjectType[];
}

export default function ProjectList({ projectArray }: ProjectListProps) {
  const { viewMode } = useViewMode();
  const [hoveredImage, setHoveredImage] = useState<SanityImage | null>(null);
  const [hoveredImageId, setHoveredImageId] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const listAnimationVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const gridAnimationVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.2, duration: 1 },
    }),
  };
  return (
    <div className="mt-[84px] ml-5 mr-5 font-ppeiko font-thin">
      <div>
        {viewMode === "grid" ? (
          <Grid className="gap-5 gap-y-10">
            {projectArray.map((project: ProjectType, i: number) => (
              <motion.div
                custom={i}
                initial="hidden"
                animate="visible"
                variants={gridAnimationVariant}
                key={project._id}
              >
                <Link
                  className=""
                  href={`/index/${project?.slug?.current}`}
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
          <List>
            {projectArray.map((project: ProjectType, i: number) => (
              <motion.div
                key={project._id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={listAnimationVariant}
                onMouseEnter={() => {
                  setHoveredImage(project.thumbnail);
                  setHoveredImageId(project._id);
                  setHoveredLink(project.slug.current);
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredImageId(null);
                  setHoveredLink(null);
                }}
              >
                <Link href={`/${project?.slug?.current}`}>
                  <h2
                    className={`z-10 relative flex laptop:text-[42px]/[54px] tablet:text-[25px]/[32px] text-[18px]/[23px]  ${hoveredImageId === project._id ? "text-black" : "text-[#818181]"}`}
                  >
                    {project?.title}
                    <p className="pl-1 pr-1 text-[#818181]">/</p>
                  </h2>
                </Link>
              </motion.div>
            ))}
            {hoveredImage && (
              <Link href={`/${hoveredLink}`}>
                <UIImageSanity
                  key={hoveredImageId}
                  asset={hoveredImage}
                  alt={`Thumbnail hovered ${hoveredImageId}`}
                  className="object-contain bottom-5 fixed right-5 z-0 max-h-[450px] max-w-[350px]"
                />
              </Link>
            )}
          </List>
        )}
      </div>
    </div>
  );
}
