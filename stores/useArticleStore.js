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

  {
    id: 4,
    title: "Short stats:",
    content:
      "Dominions:\nThe Shire and Buckland, Bree and Bree-Land, Gladden Fields\n\nLanguages:\nHobbitish, Westron\n\nLifespan:\nGenerally past one-hundred years\n\nDistinctions:\nSmall stature\n\nHeight:\nAround 60 to 120 cm",
    type: "article",
    reference: {
      id: 7,
      type: "entry",
    },
  },
  {
    id: 5,
    title: "Types of Hobbits",
    content:
      "Harfoots:\nThe most common Hobbits. Smaller and shorter than other kinds and browner skin. They did not grow beards and rarely wore shoes or boots. They were skilled with their hands and feet and preferred hillsides and highlands to live in.\n\nStoors:\nOften chose to live near water or on flat land. They were broader and heavier in build than the other Hobbits and their feet and hands were larger.\n\nFallohides:\nThe least common Hobbits, who preferred trees and woodland. They had fairer skin and hair and were taller and slimmer than the others.",
    type: "article",
    reference: {
      id: 7,
      type: "entry",
    },
  },
  {
    id: 6,
    title: "Lifestyle",
    content:
      "Hobbits were fond of an unadventurous bucolic life of farming, eating, and socializing.\n\nThey enjoy seven meals a day, when they can get them:\nBreakfast, second breakfast, elevenses, luncheon, afternoon tea, dinner, and, later in the evening, supper.\n\nThey like simple food such as bread, meat, potatoes, and cheese, and also like to drink ale, often in inns. Hobbits have an inordinate liking of mushrooms, prizing them above many other foods. A common pursuit for younger hobbits is mushroom-hunting.",
    type: "article",
    reference: {
      id: 7,
      type: "entry",
    },
  },

  {
    id: 7,
    title: "Short stats:",
    content:
      "Dominions:\nEriador, East Beleriand, Fangorn Forest, Treegarth of Orthanc\n\nLanguages:\nOld Treeish, Elvish, Westron\n\nDistinctions:\nTree-like appearance, 3-7 rootlikes toes, deep dark eyes\n\nHeight:\nVery tall; several meters",
    type: "article",
    reference: {
      id: 8,
      type: "entry",
    },
  },
  {
    id: 8,
    title: "Description:",
    content:
      "Treemen were tree-like creatures who over millennia became more and more like the trees they herded. They varied in height, size, colouring, and number of fingers and toes. An individual Treeman usually resembled the species of tree they guarded.",
    type: "article",
    reference: {
      id: 8,
      type: "entry",
    },
  },

  {
    id: 12,
    title: "Description",
    content:
      "Men (initially named Atani) were one of several races inhabiting Arda. They are the humans of Middle-earth, and the second of the Children of Ilúvatar.",
    type: "article",
    reference: {
      id: 19,
      type: "entry",
    },
  },
  {
    id: 13,
    title: "Origins",
    content:
      "The race of Men were created by the supreme God, Ilúvatar. They awoke in Hildórien at the rising of the Sun, after the awakening of the Elves and Dwarves. They were called the 'Afterborn' by the Elves.\n\nMen bear the Gift of Men, which is mortality, and therefore they age and die when their time comes, and are susceptible to illness and disease. Elves are immortal, in the sense that they are not susceptible to aging and disease. However, this meant that Men were not bound to Arda as their Elven counterparts were. Even the Valar did not know what ultimate fate awaited the souls of Men, as this was known only to Eru. Ilúvatar declared that, after the world's end, Men would play a part in the 'Second Music of the Ainur'.",
    type: "article",
    reference: {
      id: 19,
      type: "entry",
    },
  },
  {
    id: 14,
    title: "Nature",
    content:
      "Eru did not make Men as similar to the Valar as He did the Elves; rather, He blessed His second children with 'strange gifts'. Amongst His creatures, Men alone would shape their lives beyond the music of the Ainur, to which all else was subject. Along with this gift of freedom, Men were mortal, and hence not forever bound to Arda.\nIlúvatar foretold that Men, being imperfect, would stray often and not use their gifts in harmony.",
    type: "article",
    reference: {
      id: 19,
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
