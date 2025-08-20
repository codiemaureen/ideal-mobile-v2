import fs from "fs";
import path from "path";

export function getCarouselImages() {
  const imagesDir = path.join(process.cwd(), "public/images/banner");

  // Read files in the folder
  const files = fs.readdirSync(imagesDir);

  // Filter only image files (optional)
  const imageFiles = files.filter(file =>
    file.match(/\.(jpg|jpeg|png|gif|webp)$/i)
  );

  // Return them as public URLs
  return imageFiles.map(file => `/images/banner/${file}`);
}