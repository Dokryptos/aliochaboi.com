import type { Slug } from "@sanity/types";

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export default interface Project {
  _id: string;
  title: string;
  shortTitle?: string;
  slug: Slug;
  thumbnail: SanityImage;
  gallery: SanityImage[];
}
