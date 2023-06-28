import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { uid } from "uid";

const articlesList = [
  {
    id: 1,
    title: "Introduction",
    content:
      "Black Magic is one of two sources of magic in this world. Black magic can use every energy that consists of a dark or negative aura.",
    entryId: 2,
  },
  {
    id: 2,
    title: "Usecases",
    content:
      "Black magic is used everywhere where there is suffering that wants to be turned into something good. But beware, do not try and change the energy you want to use for your magic!",
    entryId: 2,
  },
];

function createNewArticle(entryId) {
  return {
    id: uid(),
    title: "",
    content: "",
    entryId,
  };
}

function handleGetArticlesByEntryId(entryId, articles) {
  return articles.slice().filter((entry) => entry.entryId === entryId);
}

export const useArticleStore = create(
  persist(
    immer((set, get) => ({
      articles: articlesList,
      createNewArticle,
      addArticle: (newArticle) =>
        set((state) => {
          state.articles.push(newArticle);
        }),
      getArticleById: (id) =>
        get().articles.find((article) => article.id === id),
      getArticlesByEntryId: (entryId) =>
        handleGetArticlesByEntryId(entryId, get().articles),
      updateArticle: (id, key, value) => {
        set((state) => {
          const index = state.articles.findIndex(
            (article) => article.id === id
          );
          state.articles[index][key] = value;
        });
      },
    })),
    {
      name: "articles",
    }
  )
);

// store without immer:
// export const useArticleStore = create(
//   persist(
//     (set, get) => ({
//       articles: articlesList,
//       createNewArticle,
//       addArticle: (newArticle) =>
//         set({ articles: [...get().articles, newArticle] }),
//       getArticlesByEntryId: (entryId) =>
//         getArticlesByEntry(entryId, get().articles),
//     }),
//     {
//       name: "articles",
//     }
//   )
// );
