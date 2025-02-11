import { defineField, defineType, defineArrayMember } from "sanity";
import { BookIcon } from "@sanity/icons";

export const bookType = defineType({
  name: "book",
  title: "Book",
  type: "document",
  icon: BookIcon,
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
      name: "shortTitle",
      title: "Short Title",
      type: "string",
      description: "Short title of the project",
    }),
    defineField({
      name: "description",
      title: "Description",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      type: "array",
      of: [defineArrayMember({ type: "block", name: "block" })],
      description: "Write the description of your project",
    }),
    defineField({
      name: "price",
      title: "Price",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      type: "number",
      description: "Write the price in number",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The first img use for the présentation project",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string", name: "tag" })],
      description: "Tags for the project",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          name: "image",
          options: {
            hotspot: true,
          },
        }),
        defineArrayMember({
          type: "mux.video",
          name: "video",
        }),
      ],
    }),
  ],
});
