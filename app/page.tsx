import Image from "next/image";
import { Hero } from "./_components/Hero";
import Section from "./_components/Section";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Section />
      <Footer />
    </main>
  );
}
