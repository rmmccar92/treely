import type { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ThemeNavProps {}

export const ThemeNav: FC<ThemeNavProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="rounded-3xl border-2 h-[40rem] w-full flex items-center justify-center backdrop-blur-xl bg-white/30 gap-8">
      <div className="flex-col items-center justify-center text-center">
        <button
          onClick={() => router.push("/over-the-river-and-through-the-woods")}
        >
          <Image
            className="rounded-3xl border-2 mb-4"
            src="/Rancho_Bernardo/images/IMG_7197.JPG"
            alt="Over the River and Through the Woods"
            width={350}
            height={350}
          />
          <span className=" text-xl font-bold">
            Over the River and Through the Woods
          </span>
        </button>
      </div>
      <div className="flex-col items-center justify-center text-center">
        <button onClick={() => router.push("/industries-finest")}>
          <Image
            className="rounded-3xl border-2 mb-4"
            src="/450/images/IMG_7282.JPG"
            alt="Over the River and Through the Woods"
            width={350}
            height={350}
          />
          <span className="mt-2 text-xl font-bold">Industries Finest</span>
        </button>
      </div>
      <div className="flex-col items-center justify-center text-center">
        <button onClick={() => router.push("/hooville")}>
          <Image
            className="rounded-3xl border-2 mb-4"
            src="/550/images/IMG_7261.JPG"
            alt="Over the River and Through the Woods"
            width={350}
            height={350}
          />
          <span className="mt-2 text-xl font-bold">Hooville</span>
        </button>
      </div>
      <div className="flex-col items-center justify-center text-center">
        <button onClick={() => router.push("/golden-age")}>
          <Image
            className="rounded-3xl border-2 mb-4"
            src="/C&W/images/IMG_0250.JPG"
            alt="Over the River and Through the Woods"
            width={350}
            height={350}
          />
          <span className="mt-2 text-xl font-bold">Golden Age</span>
        </button>
      </div>
      <div className="flex-col items-center justify-center text-center">
        <button onClick={() => router.push("/snowdrift")}>
          <Image
            className="rounded-3xl border-2 mb-4"
            src="/Lebeau/images/IMG_0245.JPG"
            alt="Over the River and Through the Woods"
            width={350}
            height={350}
          />
          <span className="mt-2 text-xl font-bold">Snowdrift</span>
        </button>
      </div>
    </div>
  );
};
