"use client";

import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import { ImageModal } from "../_components/ImageModal";
import { useRouter } from "next/navigation";

interface GalleryProps {
  params: {
    title: string;
  };
}

const IndividualGallery: FC<GalleryProps> = ({ params }) => {
  const [images, setImages] = useState([]);

  const getImgs = async () => {
    const res = await fetch(`/api/getImages/${params.title}`);
    const data = await res.json();
    // console.log("DATA", data);
    setImages(data.images);
  };
  useEffect(() => {
    getImgs();
  }, []);
  console.log("SERVER", images);
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState("");
  const { title } = params;
  const router = useRouter();

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

  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col justify-center items-center w-full p-10">
      <h1 className="text-3xl mb-2">{formatTitle(title)}</h1>
      <div className="gallery grid gap-2 grid-cols-3">
        {images &&
          images.map((image: any, index: any) => (
            <div
              onClick={() => handleClick(image.default)}
              key={index}
              className="gallery-item flex justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <Image
                className="rounded-3xl border-2 hover:filter hover:brightness-110 transition-all duration-300 ease-in-out"
                src={image.src}
                alt="gallery image"
                width={300}
                height={300}
              />
            </div>
          ))}
        <div>
          <button
            className="bg-green-800 hover:bg-green-700 fixed top-2 right-2 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleNavigate()}
          >
            Back
          </button>
        </div>
      </div>
      {clicked && <ImageModal setClicked={setClicked} imageSrc={image} />}
    </div>
  );
};
export default IndividualGallery;
