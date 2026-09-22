import { defineField, defineType } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";

export const infoType = defineType({
  name: "info",
  title: "Info Page",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "themeColor",
      title: "Couleur principale",
      type: "string",
      initialValue: "#D56745",
      validation: (rule) =>
        rule
          .required()
          .regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/)
          .error("Doit être un code couleur hexadécimal, ex: #D56745"),
      description:
        "Couleur utilisée pour : le fond de la page Info, le fond de la navbar sur la page Info, le flash de couleur au chargement de la page d'accueil, et la couleur de la barre du navigateur sur mobile. Format hexadécimal, ex: #D56745.",
    }),
    defineField({
      name: "bio",
      title: "Texte",
      type: "text",
      rows: 20,
      validation: (rule) =>
        rule.required().error(`Required to generate the Info page`),
      description:
        "Tout le texte de la colonne de gauche (bio, credit, contact...). Texte simple : une touche Entrée = retour à la ligne, deux touches Entrée (ligne vide) = saut de paragraphe visible. Pour un lien cliquable, écris [texte affiché](lien), ex: [Midnight Sun](https://collapsebooks.com/...) ou [mon@email.com](mailto:mon@email.com).",
    }),
    defineField({
      name: "clients",
      title: "Clients",
      type: "array",
      of: [{ type: "string" }],
      description: "Un élément de la liste = une ligne",
    }),
    defineField({
      name: "publications",
      title: "Publications",
      type: "array",
      of: [{ type: "string" }],
      description: "Un élément de la liste = une ligne",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Info Page" };
    },
  },
});
