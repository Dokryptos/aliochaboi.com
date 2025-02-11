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

  if (!projectData.length || !projectData[index]) return null;

  const nextProject = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const prevProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  console.log(projectData[index].thumbnail.asset);

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
          className="object-contain max-w-[90vw] max-h-[75vh]"
          priority={index === 0} // Charge la première image immédiatement
        />
      </motion.div>

      <div className="absolute w-full p-5 bottom-0 flex justify-center tablet:justify-between items-center">
        <button
          onClick={prevProject}
          className=" text-black tablet:block hidden"
        >
          Prev
        </button>
        <motion.div
          key={projectData[index].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-black"
        >
          {projectData[index].title}
        </motion.div>
        <button
          onClick={nextProject}
          className=" text-black tablet:block hidden"
        >
          Next
        </button>
      </div>
    </div>
  );
}
