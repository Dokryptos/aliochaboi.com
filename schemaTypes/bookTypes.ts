import { defineField, defineType } from "sanity";
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
      name: "details",
      title: "Details",
      type: "string",
      description:
        "Write the desDetails of your project (Pages, Number of books)",
    }),
    // defineField({
    //   name: "price",
    //   title: "Price",
    //   validation: (rule) =>
    //     rule.required().error(`Required to generate a page on the website`),
    //   type: "number",
    //   description: "Write the price in number",
    // }),
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
      name: "productBy",
      title: "ProductBy",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      type: "string",
      description: "The Name of the Producter",
    }),
    defineField({
      name: "link",
      title: "Link",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      type: "string",
      description: "The link to the shop, can't be published without him",
    }),
  ],
});
