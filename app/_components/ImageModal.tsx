// Image modal component
import type { FC, MouseEvent } from "react";
import Image from "next/image";

interface ImageModalProps {
  setClicked: (clicked: boolean) => void;
  imageSrc: string;
}

export const ImageModal: FC<ImageModalProps> = ({ setClicked, imageSrc }) => {
  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setClicked(false);
    }
  };
  return (
    <div
      className="modal fade fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 "
      id="imageModal"
      tabIndex={-1}
      aria-labelledby="imageModalLabel"
      aria-hidden="true"
      onClick={handleClickOutside}
    >
      <div className="modal-dialog md:w-[45%] h-[75%] relative top-20 left-0 w-full mx-auto">
        <div className="modal-content bg-white lg:w-full h-full flex justify-center items-center text-center overflow-hidden rounded-3xl">
          <div className="modal-header flex flex-col justify-center items-center">
            <h5 className="modal-title" id="imageModalLabel">
              {/* Image */}
            </h5>
            <button
              onClick={() => setClicked(false)}
              type="button"
              className="absolute top-[1rem] right-10 text-red-500 z-50 w-6 h-6 bg-black rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Image
              src={imageSrc}
              alt="Image"
              className="img-fluid object-fill"
              objectFit="contain"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};
