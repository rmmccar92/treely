import fs from "fs";
import path from "path";

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const { title } = params;

  let imagePath;
  let relativePath: string;
  switch (title) {
    case "industries-finest":
      (imagePath = path.join(process.cwd(), "/public/450/images")),
        (relativePath = "/450/images");
      break;
    case "over-the-river-and-through-the-woods":
      (imagePath = path.join(process.cwd(), "/public/Rancho_Bernardo/images")),
        (relativePath = "/Rancho_Bernardo/images");
      break;
    case "golden-age":
      (imagePath = path.join(process.cwd(), "/public/550/images")),
        (relativePath = "/550/images");
      break;
    case "hooville":
      (imagePath = path.join(process.cwd(), "/public/C&W/images")),
        (relativePath = "/C&W/images");
      break;
    case "snowdrift":
      (imagePath = path.join(process.cwd(), "/public/Lebeau/images")),
        (relativePath = "/Lebeau/images");
      break;
    default:
      imagePath = path.join(process.cwd(), "/public/450/images");
  }
  //   console.log(
  //     "IMAGE PATH",
  //     imagePath,
  //     path.join(process.cwd(), "/public/450/images")
  //   );
  const filenames = fs.readdirSync(imagePath);

  const images = filenames.map((filename) => ({
    src: `${relativePath}/${filename}`,
  }));

  return NextResponse.json({ status: 200, images });
}
