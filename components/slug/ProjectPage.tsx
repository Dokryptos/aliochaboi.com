"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import MuxPlayer from "@mux/mux-player-react";
import type { MuxCSSProperties } from "@mux/mux-player-react";
import ProjectType from "@/types/project";
import Grid from "../ui/grid";
import CarouselNavigation from "@/components/carousel/navigation";
import { UIImageSanity } from "../ui/image/sanity";
import { useRouter } from "next/navigation";
import { urlForImage } from "@/sanity/lib/image";

type ProjectPageProps = {
  projectData: ProjectType;
  projectArray: ProjectType[];
};
export default function ProjectPage({
  projectData,
  projectArray,
}: ProjectPageProps) {
  const router = useRouter();

  const projectsArray = Array.isArray(projectArray)
    ? projectArray
    : [projectArray];

  const currentProjectIndex = projectsArray.findIndex(
    (p) => p.slug.current === projectData?.slug.current
  );
  const currentProject = projectsArray[currentProjectIndex];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Repart du debut de la galerie a chaque changement de projet
  // (sinon l'index reste bloque sur l'ancienne valeur, qui peut ne plus
  // exister dans la galerie du nouveau projet si elle est plus courte)
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentProject?._id]);

  // Preloading Img (les videos sont chargees/streamees par MuxPlayer lui-meme)
  const preloadingKey = useMemo(() => {
    if (!currentProject?.gallery) return;

    return currentProject.gallery
      .filter((item) => item._type === "image")
      .map((asset) => {
        return urlForImage(asset).url();
      })
      .join(".");
  }, [currentProject?.gallery]);
  useEffect(() => {
    if (!currentProject?.gallery) return;

    currentProject.gallery
      .filter((item) => item._type === "image")
      .forEach((asset) => {
        const img = new Image();
        img.src = urlForImage(asset).url();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preloadingKey]);

  //Navigation function
  const nextImage = () => {
    if (currentImageIndex === currentProject.gallery.length - 1) {
      // Si c'est la dernière image, passer au projet suivant
      const nextProject =
        projectArray[(currentProjectIndex + 1) % projectsArray.length]; // Boucle sur le premier projet
      router.push(`/${nextProject.slug.current}`);
    } else {
      setCurrentImageIndex(
        (currentImageIndex + 1) % currentProject.gallery.length
      );
    }
  };

  const prevImage = () => {
    if (currentImageIndex === 0) {
      // Si c'est la première image, passer au projet précédent
      const prevProject =
        projectArray[
          (currentProjectIndex - 1 + projectArray.length) % projectsArray.length
        ];
      router.push(`/${prevProject.slug.current}`);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const currentItem = currentProject?.gallery[currentImageIndex];
  const posterUrl =
    currentItem?._type === "video" && currentItem.asset.playbackId
      ? `https://image.mux.com/${currentItem.asset.playbackId}/thumbnail.jpg?time=0`
      : undefined;

  return (
    <Grid className="gap-5 tablet:px-0 h-full overflow-hidden">
      <div className="pr-5 pl-5 tablet:p-0 laptop:col-start-3 justify-center laptop:col-span-8 col-start-1 col-span-4 tablet:col-start-2 tablet:col-span-7 flex">
        <div className="relative flex items-center w-full h-dvh  pt-[80px] pb-[80px] laptop:pt-[120px] laptop:pb-[120px]">
          {currentItem?._type === "video" ? (
            <MuxPlayer
              key={currentImageIndex}
              playbackId={currentItem.asset.playbackId}
              streamType="on-demand"
              autoPlay
              volume={0.3}
              loop
              poster={posterUrl}
              style={
                {
                  "--controls": "none",
                  "--media-object-fit": "contain",
                  "--media-background-color": "transparent",
                } as MuxCSSProperties
              }
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <UIImageSanity
              asset={currentItem?.asset}
              alt="Carrousel Project Home"
              className="object-contain w-full h-full "
            />
          )}
        </div>
      </div>

      <CarouselNavigation onPrev={prevImage} onNext={nextImage} />
      <div className="absolute w-full pb-5 pt-5 bottom-0">
        <Grid className="gap-5">
          <div className="laptop:col-start-1 laptop:col-span-6 tablet:block hidden">
            <button onClick={prevImage} className=" text-black pl-5">
              Prev
            </button>
          </div>
          <div className="laptop:col-start-7 laptop:col-span-6 tablet:col-start-5 tablet:col-span-5 col-span-4 flex justify-between">
            <motion.div
              key={currentProject?.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-black flex items-center pl-5 tablet:pl-0"
            >
              <p className="mr-3 text-[16px]/[21px] laptop:text-[20px]/[26px]">
                {currentProject?.title}
              </p>
              <p className="text-[10px]/[13px] laptop:text-[12px]/[15px] font-ppeiko">
                {currentImageIndex + 1}/{currentProject?.gallery.length}
              </p>
            </motion.div>

            <button
              onClick={nextImage}
              className="pr-5 text-black tablet:block hidden"
            >
              Next
            </button>
          </div>
        </Grid>
      </div>
    </Grid>
  );
}
