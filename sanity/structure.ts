import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects",
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "book",
        title: "Books",
        S,
        context,
      }),
      S.listItem()
        .title("Info Page")
        .id("info")
        .child(
          S.document().schemaType("info").documentId("info").title("Info Page")
        ),
    ]);
