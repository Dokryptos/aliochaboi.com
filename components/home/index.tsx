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
      <button
        onClick={prevProject}
        className="absolute left-5 p-2 bg-black/50 text-white rounded-full"
      >
        ←
      </button>

      {/* Bouton suivant */}
      <button
        onClick={nextProject}
        className="absolute right-5 p-2 bg-black/50 text-white rounded-full"
      >
        →
      </button>
      <motion.div
        key={projectData[index].title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-5 bg-black/70 text-white px-4 py-2 rounded-md"
      >
        {projectData[index].title}
      </motion.div>
    </div>
  );
}
