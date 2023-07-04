import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { uid } from "uid";

const articlesList = [
  {
    id: 1,
    title: "Introduction",
    content:
      "Dark Magic is one of two sources of magic in this world. Dark magic can use every energy that consists of a dark or negative aura.",
    type: "article",
    entryId: 2,
  },
  {
    id: 2,
    title: "Usecases",
    content:
      "Dark magic is used everywhere where there is suffering that wants to be turned into something good. But beware, do not try and change the energy you want to use for your magic!",
    type: "article",
    entryId: 2,
  },
];

function createNewArticle(entryId) {
  return {
    id: uid(),
    title: "",
    content: "",
    type: "article",
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
        get().articles.find((article) => article.id == id),
      getArticlesByEntryId: (entryId) =>
        handleGetArticlesByEntryId(entryId, get().articles),
      updateArticle: (id, key, value) => {
        set((state) => {
          const index = state.articles.findIndex((article) => article.id == id);
          state.articles[index][key] = value;
        });
      },
      deleteArticle: (id) => {
        set((state) => {
          const index = state.articles.findIndex((article) => article.id == id);
          state.articles.splice(index, 1);
        });
      },
    })),
    {
      name: "articles",
    }
  )
);
