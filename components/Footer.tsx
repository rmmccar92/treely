import type { FC } from "react";
import { Contact } from "../app/_components/Contact";
import { cn } from "@/utils/cn";
import styles from "@/styles/Footer.module.css";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div
      className={cn(
        styles.border,
        "flex w-full justify-center py-4 bg-white text-black text-center"
      )}
    >
      <div className="container mx-auto">
        <Contact />
        <span className="text-black">© 2024, All rights reserved.</span>
      </div>
    </div>
  );
};
