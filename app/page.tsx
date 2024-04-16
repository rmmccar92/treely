"use client";

import Image from "next/image";
import { Hero } from "./_components/Hero";
import Section from "./_components/Section";
// import { Contact } from "./_components/Contact";
import { Footer } from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { SectionCard } from "./_components/SectionCard";
// import { About } from "./_components/About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-full">
          {/* <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={3.7}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#faf9f9"
          /> */}
        </div>
        <div className="mb-10">
          <SectionCard
            title="About Us"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae voluptatem recusandae ipsum blanditiis. Odio delectus qui reprehenderit porro perspiciatis! Quisquam delectus autem tempore sit nobis reprehenderit optio minus iste?"
            image="https://plus.unsplash.com/premium_photo-1661398317164-4978b1a5d4ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <SectionCard
            title="Process"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae voluptatem recusandae ipsum blanditiis. Odio delectus qui reprehenderit porro perspiciatis! Quisquam delectus autem tempore sit nobis reprehenderit optio minus iste?"
            image="https://images.unsplash.com/photo-1576995083066-f7bf549dc771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <SectionCard
            title="Installation"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae voluptatem recusandae ipsum blanditiis. Odio delectus qui reprehenderit porro perspiciatis! Quisquam delectus autem tempore sit nobis reprehenderit optio minus iste?"
            image="https://images.unsplash.com/photo-1546245906-811a31d5f4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        {/* <Contact /> */}
      </div>

      <Footer />
    </main>
  );
}
