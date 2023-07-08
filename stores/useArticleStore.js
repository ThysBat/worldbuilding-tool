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
    reference: {
      id: 1,
      type: "entry",
    },
  },
  {
    id: 2,
    title: "Introduction",
    content:
      "Dark Magic is one of two sources of magic in this world. Dark magic can use every energy that consists of a dark or negative aura.",
    type: "article",
    reference: {
      id: 3,
      type: "entry",
    },
  },
  {
    id: 3,
    title: "Usecases",
    content:
      "Dark magic is used everywhere where there is suffering that wants to be turned into something good. But beware, do not try and change the energy you want to use for your magic!",
    type: "article",
    reference: {
      id: 3,
      type: "entry",
    },
  },
];

function createNewArticle(referenceId, referenceType) {
  return {
    id: uid(),
    title: "",
    content: "",
    type: "article",
    referenceId,
    reference: {
      id: referenceId,
      type: referenceType,
    },
  };
}

function handleGetArticlesByReferenceId(articles, id, type) {
  return articles
    .slice()
    .filter(({ reference }) => reference.id == id && reference.type === type);
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
      getArticlesByReferenceId: (referenceId, referenceType) =>
        handleGetArticlesByReferenceId(
          get().articles,
          referenceId,
          referenceType
        ),
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
