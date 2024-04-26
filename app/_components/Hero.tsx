"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./styles/hero.module.css";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className={styles.hero}>
      {isMobile ? 
      <video
      className={styles.heroVid}
      autoPlay
      muted
      loop
      src="/adobe_tree_video.mov"
      poster="/snow_2.png"
      /> :
      <video
        className={styles.heroVid}
        autoPlay
        muted
        loop
        src="/adobe_tree_video.mov"
      />
      }
      <Image
        src="/treely_logo.png"
        alt="treely logo"
        className={styles.heroLogo}
        width={400}
        height={400}
      />
    </div>
  );
}
