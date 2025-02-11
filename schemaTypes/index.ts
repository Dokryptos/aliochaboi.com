import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, bookType],
};

import { bookType } from "./bookTypes";
import { projectType } from "./projectType";
