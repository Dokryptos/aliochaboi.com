import List from "@/components/ui/list";
import { motion } from "framer-motion";
import { UIImageSanity } from "../ui/image/sanity";
import ProjectType, { SanityImage } from "@/types/project";
import Link from "next/link";
import { useState } from "react";

interface ListDesktopProps {
  projectArray: ProjectType[];
}

export default function ListDesktop({ projectArray }: ListDesktopProps) {
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

  return (
    <List className="laptop:flex hidden">
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
          <Link href={`/project/${project?.slug?.current}`}>
            <h2
              className={`z-10  mix-blend-difference relative flex laptop:text-[42px]/[54px] ${hoveredImageId === project._id ? "text-white" : "text-[#818181]"}`}
            >
              {project?.title}
              <p className="pl-1 pr-1 text-[#818181]">/</p>
            </h2>
          </Link>
        </motion.div>
      ))}
      {hoveredImage && (
        <Link href={`/project/${hoveredLink}`}>
          <UIImageSanity
            key={hoveredImageId}
            asset={hoveredImage}
            alt={`Thumbnail hovered ${hoveredImageId}`}
            className="bottom-5 fixed right-5 z-0 max-h-[450px] max-w-[350px]"
          />
        </Link>
      )}
    </List>
  );
}
