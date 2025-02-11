"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectType from "@/types/project";
import { UIImageSanity } from "../ui/image/sanity";
import { urlForImage } from "@/sanity/lib/image";

type ProjectDataProps = {
  projectData: ProjectType[]; // Liste de tous les projets
};
export default function Home({ projectData }: ProjectDataProps) {
  console.log(projectData);

  const [index, setIndex] = useState(0);
  const nextProject = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const prevProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (projectData.length > 0 && projectData[index]?.thumbnail?.asset) {
      // Preload the next image for smooth transitions
      const img = new Image();
      img.src = urlForImage(projectData[index].thumbnail.asset)
        .fit("max")
        .maxWidth(1440)
        .maxHeight(1440)
        .quality(75)
        .url();
    }
  }, [index, projectData]);

  if (!projectData.length || !projectData[index]) return null;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <UIImageSanity
          key={projectData[index]._id}
          asset={projectData[index].thumbnail.asset}
          alt="Carroussel project Home"
        />
      </motion.div>
      <div className="flex justify-between align-middle">
        <button onClick={prevProject} className="p-2 text-black">
          Prev
        </button>
        <motion.div
          key={projectData[index].title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="p-2 text-black"
        >
          {projectData[index].title}
        </motion.div>
        <button onClick={nextProject} className="p-2  text-black">
          Next
        </button>
      </div>
    </div>
  );
}
