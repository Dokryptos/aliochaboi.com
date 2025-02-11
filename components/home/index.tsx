"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectType from "@/types/project";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type ProjectDataProps = {
  projectData: ProjectType[]; // Liste de tous les projets
};
export default function Home({ projectData }: ProjectDataProps) {
  const [index, setIndex] = useState(0);
  const nextProject = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const prevProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  if (!projectData.length || !projectData[index]) return null;

  console.log(projectData[index].thumbnail.asset);

  return (
    <div className="relative flex-col items-center w-screen h-screen ">
      <motion.div
        className="ml-28 mr-28 absolute flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={urlForImage(projectData[index].thumbnail)
            .fit("max")
            .maxWidth(1440)
            .maxHeight(1440)
            .quality(80)
            .url()}
          alt="Carrousel Project Home"
          width={1440}
          height={960}
          className="object-contain max-w-[90vw] max-h-[90vh]"
          priority={index === 0} // Charge la première image immédiatement
        />
      </motion.div>

      <div className="absolute w-full bottom-0 flex justify-between items-center">
        <button onClick={prevProject} className="p-5 text-black">
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
