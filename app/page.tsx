"use client";

import Image from "next/image";
import { Hero } from "./_components/Hero";
import { Footer } from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { SectionCard } from "./_components/SectionCard";
import { Gallery } from "react-grid-gallery";
import galleryImages from "@/utils/galleryImages";
import { useRouter } from "next/navigation";
// import { About } from "./_components/About";

const finalImages = galleryImages.map((image) => ({
  title: image.title,
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags?.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  ),
}));

export default function Home() {
  const router = useRouter();
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
            particleColor="#C0F6FB"
          />
        </div>
        <div className="mb-10">
          <div className="flex items-center flex-wrap h-100 mt-10 mx-auto">
            <SectionCard
              title="About Us"
              text="We are a team of passionate designers with a genuine love of the holidays and spreading joy and cheer through design. With a background in Architecture, Interior Design, Mechanical/Structural/Electrical Engineering, and event planning we have the ability to create custom designs for any venue. "
              // image="https://plus.unsplash.com/premium_photo-1661398317164-4978b1a5d4ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Image
              className="rounded-r-3xl"
              src="https://plus.unsplash.com/premium_photo-1661398317164-4978b1a5d4ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="holiday stock image"
              width={950}
              height={1}
            />
          </div>
          <div className="flex items-center flex-wrap h-100 mt-10 mx-auto">
            {/* <Image
              className="rounded-r-3xl"
              src="https://images.unsplash.com/photo-1576995083066-f7bf549dc771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="holiday stock image"
              width={950}
              height={1}
            /> */}
            {/* <TracingBeam /> */}
            <SectionCard
              title="Process"
              text="Our expert staff will guide you and your team through this process: "
              // image="https://images.unsplash.com/photo-1576995083066-f7bf549dc771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="flex items-center flex-wrap h-100 mt-10 mx-auto">
            <SectionCard
              title="Installation"
              text="If you have a business we can install holiday décor custom designed to your aesthetic.
                    Install Opportunities at:
                    Commercial Office Towers
                     Malls
                    Banks
                     Dealerships,
                      Casinos,
                     Restaurants, 
                    Hotels,
                     Multi Family Lobbies, 
                    Special Events, 
                    Retail,
                     Churches"
              // image="https://images.unsplash.com/photo-1546245906-811a31d5f4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Image
              className="rounded-r-3xl border-2"
              src="https://images.unsplash.com/photo-1546245906-811a31d5f4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="holiday stock image"
              width={960}
              height={1}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-[60vw] mb-10">
        {/*@ts-ignore */}
        <div onClick={(event) => router.push(`/${event.target.alt}`)}>
          <Gallery
            images={finalImages}
            enableImageSelection={false}
            rowHeight={400}
            defaultContainerWidth={2000}
            margin={5}
            maxRows={3}
            id="gallery"
            //  onClick={(event)=>router.push(`/${event.target}`)}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
