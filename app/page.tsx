"use client";

import Image from "next/image";
import { Hero } from "./_components/Hero";
import Section from "./_components/Section";
import { Contact } from "./_components/Contact";
import { Footer } from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={3.7}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#faf9f9"
          />
        </div>
        <h1 className=" w-full md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          <Section />
          <Contact />
        </h1>
      </div>

      <Footer />
    </main>
  );
}
