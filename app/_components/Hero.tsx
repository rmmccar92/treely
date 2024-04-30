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
      <h1
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "1000",
          fontSize: "4rem",
          width: "30vw",
          marginTop: "10rem",
          marginLeft: "10rem",
          color: "white",
        }}
      >
        <p style={{ fontSize: "1.15em", fontFamily: "" }}>
          From Decorative Greens To Festive Scenes
        </p>
        <p style={{ fontSize: "0.8em" }}>Making Your Holidays Come Alive!</p>
      </h1>

      {isMobile ? (
        <video
          className={styles.heroVid}
          autoPlay
          muted
          loop
          src="/tree_video_sd.mov"
          poster="/snow_2.png"
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
