"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectType from "@/types/project";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Grid from "../ui/grid";
import CarouselNavigation from "@/components/carousel/navigation";

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
    <Grid className="gap-5 px-5 tablet:px-0 w-screen h-screen overflow-hidden">
      <div className="laptop:col-start-3 laptop:col-span-8 col-start-1 col-span-4 tablet:col-start-2 tablet:col-span-7 flex justify-center h-screen">
        <motion.div
          className="laptop: inset-0 flex items-center justify-center"
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
            className="object-contain w-full h-auto max-w-full max-h-[65%] "
            priority={index === 0} // Charge la première image immédiatement
          />
        </motion.div>
      </div>

      <CarouselNavigation
        onPrev={prevProject} // Passer la fonction prevProject en prop
        onNext={nextProject} // Passer la fonction nextProject en prop
      />

      <div className="absolute w-full pb-4 tablet:p-5 bottom-0 flex laptop:justify-center tablet:justify-between tablet:items-center">
        <div className="w-1/2 tablet:block hidden">
          <button onClick={prevProject} className=" text-black ">
            Prev
          </button>
        </div>
        <div className="tablet:w-1/2 flex justify-between">
          <motion.div
            key={projectData[index].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-black flex align-middle"
          >
            <p className="mr-2 text-base">{projectData[index].title}</p>
            <p className="italic text-xs">
              {index + 1}/{projectData.length}
            </p>
          </motion.div>

          <button
            onClick={nextProject}
            className=" text-black tablet:block hidden"
          >
            Next
          </button>
        </div>
      </div>
    </Grid>
  );
}
