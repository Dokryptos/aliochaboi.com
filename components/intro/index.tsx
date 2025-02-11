"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-themeColor "
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      ></motion.div>

      <motion.div className="fixed z-50 inset-0 flex items-center justify-center">
        <motion.h1
          className="text-black dekstop:text-[70px] tablet:text-[45px] text-[35px] "
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2, delay: 3, ease: "easeOut" }}
        >
          Aliocha Boi
        </motion.h1>
      </motion.div>
    </>
  );
}
