import type { FC } from "react";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="flex w-full justify-center py-4 bg-black text-white text-center">
      <div className="container mx-auto">
        <span className="text-white">© 2024, All rights reserved.</span>
      </div>
    </div>
  );
};
