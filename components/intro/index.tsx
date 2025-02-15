"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [isVisibleBg, setIsVisibleBg] = useState(true);
  const [isVisibleH1, setIsVisibleH1] = useState(true);

  useEffect(() => {
    // Après 3 secondes, on cache complètement l'intro
    const timerBg = setTimeout(() => {
      setIsVisibleBg(false);
    }, 1500);

    // Après 3 secondes, on cache complètement l'intro
    const timerH1 = setTimeout(() => {
      setIsVisibleH1(false);
    }, 4000);

    return () => {
      clearTimeout(timerBg);
      clearTimeout(timerH1);
    };
  }, []);
  return (
    <div>
      <motion.div
        className={`fixed inset-0 z-30 bg-themeColor ${isVisibleBg ? "block" : "hidden"}`}
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      ></motion.div>

      <motion.div
        className={`fixed z-40 mt-[80px] mb-[80px] inset-0 flex items-center justify-center ${isVisibleH1 ? "block" : "hidden"}`}
      >
        <motion.h1
          className="text-black font-neueGrotesk dekstop:text-[70px] tablet:text-[45px] text-[35px]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
        >
          Aliocha Boi
        </motion.h1>
      </motion.div>
    </div>
  );
}
