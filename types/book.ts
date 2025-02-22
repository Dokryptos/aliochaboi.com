export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface BlockContent {
  _type: "block";
  children: Array<{ text: string }>;
}

export default interface Book {
  _id: string;
  title: string;
  thumbnail?: SanityImage;
  productBy: string;
  details?: string;
}
