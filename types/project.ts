import type { Slug } from "@sanity/types";

export interface SanityImage {
  _type: "image";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _upload: any;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanityVideo {
  _type: "video";
  asset: {
    playbackId?: string;
    status?: string;
  };
}

export type GalleryItem = SanityImage | SanityVideo;

export default interface Project {
  _id: string;
  title: string;
  shortTitle?: string;
  slug: Slug;
  thumbnail: SanityImage;
  thumbnailVideo?: { asset: SanityVideo["asset"] } | null;
  gallery: GalleryItem[];
}
