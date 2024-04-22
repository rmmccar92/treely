"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Tracer } from "@/components/ui/tracer";

export function TracingBeam() {
  return (
    <Tracer className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2> */}

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </Tracer>
  );
}

const dummyContent = [
  {
    title: "Consult",
    description: (
      <>
        <p>
          Consult – we first visit the site to get an idea of the overall color
          scheme of the space We then set up a consult meeting on site where we
          bring lots of ornaments and design ideas to share with you and your
          team in the space so you can see how the palette works with the
          surrounding space
        </p>
      </>
    ),
    // badge: "React",
    image: "/process/1.png",
  },
  {
    title: "Design",
    description: (
      <>
        <p>
          Design - Once a color scheme is chosen we get to work on mocking up a
          design for your team to approve
        </p>
      </>
    ),
    // badge: "Changelog",
    image: "/process/2.png",
  },
  {
    title: "Installation",
    description: (
      <>
        <p>
          Installation – We install everything working with your onsite
          engineering team or our list of professional licensed engineers to
          work with your building/spaces infrastructure for a seamless install
          process.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image: "/process/3.png",
  },
  {
    title: "Removal",
    description: (
      <>
        <p>
          Removal – don’t worry about the mess. We will remove everything at a
          mutually agreed date and have the space back to normal before you get
          back to work in the morning
        </p>
      </>
    ),
    // badge: "Launch Week",
    image: "/process/4.png",
  },
  {
    title: "Storage",
    description: (
      <>
        <p>
          Storage – Want to do it all again next year? Discounts are available
          for signing multi year contracts. Your décor is stored safe and sound
          in our warehouse with 24 hour security ready to be installed again
          next year.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image: "/process/5.png",
  },
];
