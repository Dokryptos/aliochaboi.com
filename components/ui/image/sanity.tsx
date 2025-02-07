import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";

export type UIImageSanityProps = {
  // linked asset from sanity
  asset: SanityImageSource;
  // alt for the image
  alt: string;
  // optional className
  className?: string;
  width?: number;
  height?: number;
};

export const UIImageSanity = ({
  asset,
  alt,
  className,
  height = 1024,
  width = 768,
}: UIImageSanityProps) => {
  if (!asset) return null;

  const imageUrl = urlForImage(asset)
    .fit("max")
    .maxWidth(1440)
    .maxHeight(1440)
    .quality(75)
    .url();

  return (
    <Image
      src={imageUrl}
      className={className}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 1024px) 100vw, 1024px"
    />
  );
};
