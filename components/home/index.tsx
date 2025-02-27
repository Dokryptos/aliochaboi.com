"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectType from "@/types/project";
import Grid from "../ui/grid";
import CarouselNavigation from "@/components/carousel/navigation";
import { UIImageSanity } from "../ui/image/sanity";
import Intro from "../intro";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

type ProjectDataProps = {
  projectData: ProjectType[]; // Liste de tous les projets
};

export default function HomeComponent({ projectData }: ProjectDataProps) {
  const [index, setIndex] = useState(0);

  const preloadingKey = useMemo(() => {
    if (!projectData) return;

    return projectData.map((asset) => {
      const thumbnailAsset = asset.thumbnail;
      return urlForImage(thumbnailAsset).url();
    }).join('.');
  }, [projectData]);
  useEffect(() => {
    if (!projectData) return;

    projectData.forEach((asset) => {
      const thumbnailAsset = asset.thumbnail;

      const img = new Image();
      img.src = urlForImage(thumbnailAsset).url();
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preloadingKey]);

  if (!projectData.length || !projectData[index]) return null;

  const nextProject = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const prevProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Intro />
      <Grid className="gap-5 tablet:px-0 h-full overflow-hidden">
        <div className="pr-5 pl-5 tablet:p-0 laptop:col-start-3 justify-center laptop:col-span-8 col-start-1 col-span-4 tablet:col-start-2 tablet:col-span-7 flex">
          <div className="flex items-center h-dvh pt-[110px] pb-[110px]">
            <Link
              href={`/${projectData[index].slug.current}`}
              className="h-full w-full laptop:flex items-center hidden z-30"
            >
              <UIImageSanity
                asset={projectData[index].thumbnail}
                alt="Carrousel Project Home"
                className="object-contain h-full w-full laptop:flex hidden max-h-[600px]"
              />
            </Link>
            <UIImageSanity
              asset={projectData[index].thumbnail}
              alt="Carrousel Project Home"
              className="object-contain h-full w-full laptop:hidden flex "
            />
          </div>
        </div>

        <CarouselNavigation onPrev={prevProject} onNext={nextProject} />
        <div className="absolute w-full pb-5 pt-5 bottom-0">
          <Grid className="gap-5">
            <div className="laptop:col-start-1 laptop:col-span-6 tablet:block hidden">
              <button onClick={prevProject} className=" text-black pl-5">
                Prev
              </button>
            </div>
            <div className="laptop:col-start-7 laptop:col-span-6 tablet:col-start-5 tablet:col-span-5 col-span-4 flex justify-between">
              <Link
                href={`/${projectData[index].slug.current}`}
                className="z-20"
              >
                <motion.div
                  key={projectData[index].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-black flex items-center pl-5 tablet:pl-0"
                >
                  <p className="mr-3 text-[16px]/[21px] laptop:text-[20px]/[26px]">
                    {projectData[index].title}
                  </p>
                  <p className="text-[10px]/[13px] laptop:text-[12px]/[15px] font-ppeiko">
                    {index + 1}/{projectData.length}
                  </p>
                </motion.div>
              </Link>
              <button
                onClick={nextProject}
                className="pr-5 text-black tablet:block hidden"
              >
                Next
              </button>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
