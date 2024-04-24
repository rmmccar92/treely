"use client";
import React from "react";
import Image from "next/image";
import { Tracer } from "@/components/ui/tracer";
import { cn } from "@/utils/cn";

export function TracingBeam() {
  return (
    <Tracer className="px-4 z-50">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div
            key={`content-${index}`}
            className={cn(
              "mb-5 relative",
              index % 2 === 0 &&
                "border-l-8 border-yellow-400 right-[50%] mr-5",
              index % 2 !== 0 &&
                "border-r-8 border-green-800 flex-row-reverse left-[50%] ml-5"
            )}
          >
            <h2 className="bg-white text-black rounded-full text-sm w-100 px-4 py-1 my-4 mx-10 text-center">
              {item.title}
            </h2>

            <div className="text-sm flex prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="process"
                  height="175"
                  width="175"
                  className="rounded-full border-2 border-yellow-400 mb-10 object-cover mx-2"
                />
              )}
              <div className="mx-1 p-6">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Tracer>
  );
}

const content = [
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
