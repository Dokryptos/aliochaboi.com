import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: SanityImageSource) =>
  builder
    .image(source)
    .auto("format")
    .fit("max")
    .maxHeight(1440)
    .maxWidth(1440);
