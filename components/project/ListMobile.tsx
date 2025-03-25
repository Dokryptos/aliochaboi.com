import List from "@/components/ui/list";
import { motion } from "framer-motion";
import { UIImageSanity } from "../ui/image/sanity";
import ProjectType from "@/types/project";
import Link from "next/link";
import {
  useState,
  useEffect,
  RefObject,
  useCallback,
  MouseEvent as ReactMouseEvent,
} from "react";
import MobileArrowDown from "@/public/icons/mobile-arrowDown.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ListMobileProps {
  projectArray: ProjectType[];
  scrollRef: RefObject<HTMLDivElement | null>;
}

export default function ListMobile({
  projectArray,
  scrollRef,
}: ListMobileProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const projectHeight = 300;
  const totalHeight = (projectArray.length + 1) * projectHeight;
  const [firstAnimationDone, setFirstAnimationDone] = useState(false);

  const updateSelectedIndex = () => {
    if (!scrollRef.current) return;
    const scrollTop = scrollRef.current.scrollTop;
    const totalScrollHeight =
      scrollRef.current.scrollHeight -
      scrollRef.current.getBoundingClientRect().height;

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
    if (!scrollRef.current) return;
    scrollRef.current.addEventListener("scroll", updateSelectedIndex);

    return () => {
      if (!scrollRef.current) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollRef.current.removeEventListener("scroll", updateSelectedIndex);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  const [hoveringClickableElement, setHoveringClickableElement] =
    useState<boolean>(false);

  const router = useRouter();
  const findHoveredElement = (event: MouseEvent) => {
    const elementsHref = document.querySelectorAll("[data-href]");
    return [...elementsHref].find((element) => {
      const rect = element.getBoundingClientRect();
      if (
        event.pageX >= rect.left &&
        event.pageX <= rect.right &&
        event.pageY >= rect.top &&
        event.pageY <= rect.bottom
      )
        return true;
    });
  };
  const onClickList = (event: ReactMouseEvent) => {
    const hoveredElement = findHoveredElement(event as unknown as MouseEvent);
    if (hoveredElement) {
      const href = hoveredElement.getAttribute("data-href");
      if (href) router.push(href);
    }
  };
  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      const hoveredElement = findHoveredElement(event);

      if (hoveredElement && !hoveringClickableElement)
        setHoveringClickableElement(true);
      else if (!hoveredElement && hoveringClickableElement)
        setHoveringClickableElement(false);
    },
    [hoveringClickableElement]
  );
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [hoveringClickableElement, onMouseMove]);

  const listAnimationVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const delayArrowAnimation = (projectArray.length + 2) * 0.2;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstAnimationDone(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="laptop:hidden flex font-ppeiko overflow-y-auto"
      style={{
        height: totalHeight,
        cursor: hoveringClickableElement ? "pointer" : "default",
      }}
      onClick={onClickList}
    >
      <List className="fixed mr-5 bg-white pointer-events-none">
        {projectArray.map((project: ProjectType, i: number) => (
          <motion.div
            key={project._id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={listAnimationVariant}
          >
            <h2
              data-href={`/${project?.slug?.current}`}
              className={`z-20 mix-blend-difference relative flex tablet:text-[25px]/[32px] text-[18px]/[23px] ${!firstAnimationDone && projectArray[selectedIndex]?._id === project._id ? "text-black" : projectArray[selectedIndex]?._id === project._id ? "text-white z-20" : "text-[#818181]"}`}
            >
              {project?.title}
              {i < projectArray.length - 1 && (
                <p className="pl-1 pr-1 text-[#818181]">/</p>
              )}
            </h2>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delayArrowAnimation }}
          className="absolute bottom-[-51px] left-0 flex"
        >
          <Image
            src={MobileArrowDown}
            alt="Mobile/Pads arrow"
            className="w-[7px] h-[15px] mr-[8px]"
          />
        </motion.div>
        <Link
          href={`/`}
          className="text-black text-[16px]/[21px] font-neueGrotesk fixed bottom-5 left-5 z-20 pointer-events-auto"
        >
          Back
        </Link>
        <UIImageSanity
          key={projectArray[selectedIndex]._id}
          asset={projectArray[selectedIndex].thumbnail.asset}
          alt={`Thumbnail hovered ${projectArray[selectedIndex]._id}`}
          className="bottom-5 fixed right-5 z-10 max-h-[215px] max-w-[250px] tablet:max-w-[450px] tablet:max-h-[450px] w-auto pointer-events-none"
          data-href={`/${projectArray[selectedIndex]?.slug.current}`}
        />
      </List>
    </div>
  );
}
