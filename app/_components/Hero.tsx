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
      <div className={styles.heroText}>
        <h1>
          From Decorative Greens <br /> To Festive Scenes
        </h1>
        <p>Making Your Holidays Come Alive!</p>
      </div>

      {isMobile ? (
        <video
          className={styles.heroVid}
          autoPlay
          muted
          loop
          src="/tree_video_sd.mov"
          poster="/snow_3.png"
        />
      ) : (
        <video
          className={styles.heroVid}
          autoPlay
          muted
          loop
          src="/tree_video_sd.mov"
        />
      )}
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
