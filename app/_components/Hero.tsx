"use client";

import Image from "next/image";

import styles from "./styles/hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <video
        className={styles.heroVid}
        autoPlay
        muted
        loop
        src="/adobe_tree_video.mov"
      />
      <Image
        src="/treely_logo.png"
        alt="treely logo"
        className={styles.heroLogo}
        width={475}
        height={475}
      />
    </div>
  );
}
