"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";
import { TracingBeam } from "./TracingBeam";

interface SectionCardProps {
  title: string;
  text: string;
  image?: string;
  colors?: number[][];
}
export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  text,
  image,
  colors,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <>
      {title === "Process" ? (
        <div className="processContainer">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="processSec rounded-r-3xl border-2 w-full flex flex-col overflow-hidden items-center justify-center backdrop-blur-xl bg-white/30 gap-4 mx-auto p-8 relative"
        >
          <div className=" w-[40rem] flex flex-col">
            <h1 className="w-full md:text-7xl text-3xl lg:text-6xl font-bold text-center text-black relative z-50">
              {title || "Title"}
            </h1>
            <p className="md:text-xl text-md font-medium  text-black relative z-20 max-w-2xl mx-auto max-sm:w-1/2">
              {text ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae voluptatem recusandae ipsum blanditiis. Odio delectus qui reprehenderit porro perspiciatis! Quisquam delectus autem tempore sit nobis reprehenderit optio minus iste?"}
            </p>
          </div>
          {/* {image && (
            <Image
              src={image}
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover z-[50]"
            />
          )} */}
          <TracingBeam />
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent"
                  colors={[
                    [255, 255, 255],
                    [186, 242, 239],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={3}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      ) : (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="regSec rounded-l-3xl border-2 h-[40rem] w-[50rem] flex flex-col lg:flex-column overflow-hidden items-center justify-center backdrop-blur-xl bg-white/30 gap-4 mx-auto px-8 relative"
        >
          <h1 className="w-full md:text-7xl text-3xl lg:text-6xl font-bold text-center text-black relative z-50">
            {title || "Title"}
          </h1>
          <p className="md:text-2xl text-2xl font-medium  text-black relative z-20 max-w-2xl mx-auto">
            {text ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae voluptatem recusandae ipsum blanditiis. Odio delectus qui reprehenderit porro perspiciatis! Quisquam delectus autem tempore sit nobis reprehenderit optio minus iste?"}
          </p>
          {/* {image && (
        <Image
          src={image}
          alt="Picture of the author"
          width={500}
          height={500}
          className="object-cover z-[50]"
        />
      )} */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent"
                  colors={[
                    [255, 255, 255],
                    [186, 242, 239],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={3}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};
