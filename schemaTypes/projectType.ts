import { defineField, defineType, defineArrayMember } from "sanity";
// import { isUniqueAcrossAllDocuments } from "../sanity/lib/isUniqueAccrossAllDocument";
import { ArchiveIcon } from "@sanity/icons";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ArchiveIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The title of the project",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        // isUnique: isUniqueAcrossAllDocuments,
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The slug is the url path of the project",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      options: {
        hotspot: true,
      },
      description: "The first img use for the présentation project",
    }),
    defineField({
      name: "gallery",
      title: "gallery",
      type: "array",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      of: [
        defineArrayMember({
          type: "image",
          name: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
});
