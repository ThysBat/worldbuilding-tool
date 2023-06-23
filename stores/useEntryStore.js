import { create } from "zustand";
import { persist } from "zustand/middleware";

import slugify from "slugify";
import { uid } from "uid";

const entriesList = [
  {
    id: 1,
    name: "Airships",
    slug: "airships",
    pathPrefix: "/entry/",
    categoryId: 3,
  },
  {
    id: 2,
    name: "Black Magic",
    slug: "black-magic",
    pathPrefix: "/entry/",
    categoryId: 3,
  },
];

function createNewEntry(entryName, categoryId) {
  const slug = slugify(entryName, { lower: true });

  return {
    id: uid(),
    name: entryName,
    slug: slug,
    pathPrefix: "/entry/",
    categoryId,
  };
}

function getEntriesByCategory(categoryId, entries) {
  return entries
    .slice()
    .filter((category) => category.categoryId === categoryId);
}

export const useEntryStore = create(
  persist(
    (set, get) => ({
      entries: entriesList,
      createNewEntry,
      addEntry: (newEntry) => set({ entries: [...get().entries, newEntry] }),
      getEntriesByCategoryId: (categoryId) =>
        getEntriesByCategory(categoryId, get().entries),
    }),
    {
      name: "entries",
    }
  )
);
