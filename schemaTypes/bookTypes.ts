import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const bookType = defineType({
  name: "book",
  title: "Book",
  type: "document",
  icon: BookIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "book" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The title of the Book (Obligation)",
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "string",
      description:
        "Write the desDetails of your project (Pages, Number of books)",
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
      description: "The image use for the presentation of Book (Obligation)",
    }),
    defineField({
      name: "published",
      title: "Published",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      type: "string",
      description: "The Name of the Producter (Obligation)",
    }),
    defineField({
      name: "link",
      title: "Link",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      type: "string",
      description: "The Link to the shop need to be a URL (Obligation)",
    }),
  ],
});
