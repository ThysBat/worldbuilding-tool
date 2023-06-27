import { create } from "zustand";
import { persist } from "zustand/middleware";

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

function createNewArticle(article, entryId) {
  return {
    id: uid(),
    title: article.title,
    content: article.content,
    entryId,
  };
}

function getArticlesByEntry(entryId, articles) {
  return articles.slice().filter((entry) => entry.entryId === entryId);
}

export const useArticleStore = create(
  persist(
    (set, get) => ({
      articles: articlesList,
      createNewArticle,
      addSection: (newSection) =>
        set({ articles: [...get().articles, newSection] }),
      getArticlesByEntryId: (entryId) =>
        getArticlesByEntry(entryId, get().articles),
    }),
    {
      name: "articles",
    }
  )
);
