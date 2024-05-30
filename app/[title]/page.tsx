"use client";

import { type FC, useState } from "react";
import Image from "next/image";
import { ImageModal } from "../_components/ImageModal";

interface GalleryProps {
  params: {
    title: string;
  };
}

function importAll(r: RequireContext) {
  return r.keys().map(r);
}

// Adjust the path to match your images folder

const images = importAll(
  require.context("../../public/450/images", false, /\.(png|JPE?G|svg)$/)
);
const IndividualGallery: FC<GalleryProps> = ({ params }) => {
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState("");
  const { title } = params;

  const formatTitle = (title: string) => {
    return title
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const handleClick = (image: string) => {
    setClicked(!clicked);
    setImage(image);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full p-10">
      <h1 className="text-3xl mb-2">{formatTitle(title)}</h1>
      <div className="gallery grid gap-2 grid-cols-3">
        {images.map((image: any, index) => (
          <div
            onClick={() => handleClick(image.default)}
            key={index}
            className="gallery-item flex justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <Image
              className="rounded-3xl border-2 hover:filter hover:brightness-110 transition-all duration-300 ease-in-out"
              src={image.default}
              alt="gallery image"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
      {clicked && <ImageModal setClicked={setClicked} imageSrc={image} />}
    </div>
  );
};
export default IndividualGallery;
