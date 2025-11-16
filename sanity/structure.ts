import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("News")
        .child(
          S.list()
            .title("News Documents")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("author").title("Authors"),
              S.divider(),
            ])
        ),

      S.listItem()
        .title("Projects")
        .child(
          S.list()
            .title("Projects Documents")
            .items([
              S.documentTypeListItem("project").title("Projects"),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "project", ].includes(item.getId()!)
      ),
    ]);
