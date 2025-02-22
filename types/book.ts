import type { Slug } from "@sanity/types";

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export default interface Book {
  _id: string;
  slug: Slug;
  title: string;
  thumbnail: SanityImage;
  productBy: string;
  details?: string;
  link: string;
}
