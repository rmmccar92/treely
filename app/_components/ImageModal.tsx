// Image modal component
import type { FC } from "react";
import Image from "next/image";

interface ImageModalProps {
  setClicked: (clicked: boolean) => void;
  imageSrc: string;
}

export const ImageModal: FC<ImageModalProps> = ({ setClicked, imageSrc }) => {
  return (
    <div
      className="modal fade fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
      id="imageModal"
      tabIndex={-1}
      aria-labelledby="imageModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog md:w-[80%] h-[75%] relative lg:left-[10rem] top-20 md:left-[10rem] left-0  w-full">
        <div className="modal-content  bg-white lg:w-full h-full flex justify-center items-center text-center overflow-hidden rounded-3xl">
          <div className="modal-header flex flex-col justify-center items-center">
            <h5 className="modal-title" id="imageModalLabel">
              {/* Image */}
            </h5>
            <button
              onClick={() => setClicked(false)}
              type="button"
              className="absolute top-2 right-2 text-red-500 z-100 w-6 h-6 bg-black rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
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
              className="img-fluid"
              width={480}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
