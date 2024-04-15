"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-bg";
import Image from "next/image";

import styles from "./styles/hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      {/* <AuroraBackground> */}
      <video
        className={styles.heroVid}
        autoPlay
        muted
        loop
        src="/tree_vid.mov"
      />
      <Image
        src="/treely_logo.png"
        alt="treely logo"
        className={styles.heroLogo}
        width={650}
        height={650}
      />
      {/* <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            <h1>Treely</h1>
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Very cool tagline 😎
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Book Now!
          </button>
        </motion.div>
      </AuroraBackground> */}
    </div>
  );
}
