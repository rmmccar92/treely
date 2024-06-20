import type { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles/themeNav.module.css";
import { cn } from "@/utils/cn";

interface ThemeNavProps {}

export const ThemeNav: FC<ThemeNavProps> = ({}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        styles.main,
        "rounded-3xl border-2 h-[40rem] w-full flex items-start justify-center backdrop-blur-xl bg-white/30 gap-8 p-4 pt-[6rem]  "
      )}
    >
      <div className="flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        <button
          onClick={() => router.push("/over-the-river-and-through-the-woods")}
        >
          <Image
            className="rounded-3xl border-2 mb-4 hover:brightness-110 transition-all duration-300 ease-in-out"
            src="/Rancho_Bernardo/images/IMG_7197.webp"
            alt="Over the River and Through the Woods"
            width={350}
            height={350}
          />
          <span className=" text-xl font-bold">
            Over the River and Through the Woods
          </span>
        </button>
      </div>
      <div className="flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        <button onClick={() => router.push("/industries-finest")}>
          <Image
            className="rounded-3xl border-2 mb-4 hover:brightness-110 transition-all duration-300 ease-in-out"
            src="/450/images/IMG_7283.webp"
            alt="Industries Finest"
            width={350}
            height={350}
          />
          <span className="mt-2 text-xl font-bold">Industries Finest</span>
        </button>
      </div>
      <div className="flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        <button onClick={() => router.push("/golden-age")}>
          <Image
            className="rounded-3xl border-2 mb-4 hover:brightness-110 transition-all duration-300 ease-in-out"
            src="/550/images/IMG_7261.webp"
            alt="Golden Age"
            width={350}
            height={350}
          />
          <span className="mt-2 text-xl font-bold">Golden Age</span>
        </button>
      </div>
      <div className="flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        <button onClick={() => router.push("/hooville")}>
          <Image
            className="rounded-3xl border-2 mb-4 hover:brightness-110 transition-all duration-300 ease-in-out"
            src="/C&W/images/IMG_0250.webp"
            alt="Hooville"
            width={350}
            height={350}
          />
          <span className="mt-2 text-xl font-bold">Hooville</span>
        </button>
      </div>
      <div className="flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        <button onClick={() => router.push("/snowdrift")}>
          <Image
            className="rounded-3xl border-2 mb-4 hover:brightness-110 transition-all duration-300 ease-in-out"
            src="/Lebeau/images/IMG_0245.webp"
            alt="Snowdrift"
            width={350}
            height={350}
          />
          <span className="mt-2 text-xl font-bold">Snowdrift</span>
        </button>
      </div>
    </div>
  );
};
