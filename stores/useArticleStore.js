import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { uid } from "uid";

const articlesList = [
  {
    id: 1,
    title: "Mix of Magic and Technology",
    content:
      "Magic and Technology are closely intertwined to be able to sail along the winds.",
    type: "article",
    entryId: 1,
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
