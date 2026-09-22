import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, bookType, infoType],
};

import { bookType } from "./bookTypes";
import { projectType } from "./projectType";
import { infoType } from "./infoType";
