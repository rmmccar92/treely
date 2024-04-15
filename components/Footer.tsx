import type { FC } from "react";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="flex w-full justify-center py-4 bg-white text-black text-center">
      <div className="container mx-auto">
        <span className="text-black">© 2024, All rights reserved.</span>
      </div>
    </div>
  );
};
