import List from "@/components/ui/list";
import { motion } from "framer-motion";
import { UIImageSanity } from "../ui/image/sanity";
import ProjectType from "@/types/project";
import Link from "next/link";
import { useState, useEffect } from "react";
// import MobileArrowDown from "@/icons/mobile-arrowDown.png";

interface ListMobileProps {
  projectArray: ProjectType[];
}

export default function ListMobile({ projectArray }: ListMobileProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const projectHeight = 300;
  const totalHeight = (projectArray.length + 1) * projectHeight;

  const updateSelectedIndex = () => {
    const scrollTop = window.scrollY;
    const totalScrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    let newIndex = Math.floor(scrollTop / projectHeight);

    if (scrollTop >= totalScrollHeight) {
      newIndex = projectArray.length - 1;
    }
    if (
      newIndex !== selectedIndex &&
      newIndex >= 0 &&
      newIndex < projectArray.length
    ) {
      setSelectedIndex(newIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateSelectedIndex);

    return () => {
      window.removeEventListener("scroll", updateSelectedIndex);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  const listAnimationVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div
      className="laptop:hidden relative font-ppeiko overflow-y-auto mt-[84px]"
      style={{ height: totalHeight }}
    >
      <List className="fixed">
        {projectArray.map((project: ProjectType, i: number) => (
          <motion.div
            key={project._id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={listAnimationVariant}
          >
            <Link href={`/${project?.slug?.current}`}>
              <h2
                className={`z-10  relative flex laptop:text-[42px]/[54px] tablet:text-[25px]/[32px] text-[18px]/[23px]  ${projectArray[selectedIndex]?._id === project._id ? "text-black" : "text-[#818181]"}`}
              >
                {project?.title}
                <p className="pl-1 pr-1 text-[#818181]">/</p>
              </h2>
            </Link>
          </motion.div>
        ))}
      </List>
      {/* <MobileArrowDown /> */}

      <Link href={`/${projectArray[selectedIndex]?.slug.current}`}>
        <UIImageSanity
          key={projectArray[selectedIndex]._id}
          asset={projectArray[selectedIndex].thumbnail.asset}
          alt={`Thumbnail hovered ${projectArray[selectedIndex]._id}`}
          className="bottom-5 fixed right-5 z-0 max-h-[215px] max-w-[250px] tablet:max-w-[575px] tablet:max-h-[530px] w-auto"
        />
      </Link>
    </div>
  );
}
