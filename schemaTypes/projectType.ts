import { defineField, defineType, defineArrayMember } from "sanity";
import { ArchiveIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ArchiveIcon,
  orderings: [orderRankOrdering],
  fieldsets: [
    {
      name: "misc",
      title: "Misc",
      options: {
        columns: 3,
      },
    },
  ],
  fields: [
    orderRankField({ type: "project" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The title of the project (Obligation)",
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
        isUnique: async (value, context) => {
          const { document, getClient } = context;
          const client = getClient({ apiVersion: "2025-02-11" });
          const id = document?._id.replace(/^drafts\./, "");
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug: value,
          };
          const query = `!defined(*[
            _type == "project" &&
            !(_id in [$draft, $published]) &&
            slug.current == $slug
          ][0]._id)`;
          return await client.fetch(query, params);
        },
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: `The slug is the url path of the project, Can use Generate button but try to keep it clean Without ponctuation(, . ; : ! ?) and Without (&é"'(-è_çà)=) (Obligation). Doit être unique : deux projets ne peuvent pas avoir le même slug.`,
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
      description:
        "The first image use for the presentation of the project (Obligation)",
    }),
    defineField({
      name: "thumbnailVideo",
      title: "Thumbnail video (optional)",
      type: "mux.video",
      description:
        "Optionnel : si renseigné, remplace le Thumbnail (image) par cette vidéo sur le carrousel de la page d'accueil uniquement. Le champ Thumbnail (image) reste obligatoire et continue d'être utilisé partout ailleurs (grille et liste des projets).",
    }),
    defineField({
      name: "gallery",
      title: "gallery",
      type: "array",
      description:
        "Select all the image/video you want to render, in Webp for keep the place on the CMS and keep the CMS available with the free version (Obligation) with 1 image",
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
        defineArrayMember({
          type: "mux.video",
          name: "video",
        }),
      ],
    }),
  ],
});
