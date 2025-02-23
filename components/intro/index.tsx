"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [isVisibleBg, setIsVisibleBg] = useState(true);
  const [isVisibleH1, setIsVisibleH1] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
      if (!hasSeenIntro) {
        setShowIntro(true);
        sessionStorage.setItem("hasSeenIntro", "true");
      }
    }
  }, []);

  useEffect(() => {
    const animationSeen = sessionStorage.getItem("animationSeen");

    if (animationSeen === "true") {
      // Si l'animation a déjà été vue, ne rien faire
      setIsVisibleBg(false);
      setIsVisibleH1(false);
    } else {
      const timerBg = setTimeout(() => {
        setIsVisibleBg(false);
      }, 1500);

      const timerH1 = setTimeout(() => {
        setIsVisibleH1(false);
        sessionStorage.setItem("animationSeen", "true");
      }, 2500);

      return () => {
        clearTimeout(timerBg);
        clearTimeout(timerH1);
      };
    }
  }, []);
  return (
    <>
      {showIntro && (
        <div>
          <motion.div
            className={`fixed inset-0 z-30 bg-principal ${isVisibleBg ? "block" : "hidden"}`}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className={`fixed z-40 mt-[80px] mb-[80px] inset-0 flex items-center justify-center ${isVisibleH1 ? "block" : "hidden"}`}
          >
            <motion.h1
              className="font-neueGrotesk mix-blend-difference text-black dekstop:text-[70px] tablet:text-[45px] text-[35px]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
            >
              Aliocha Boi
            </motion.h1>
          </motion.div>
        </div>
      )}
    </>
  );
}
