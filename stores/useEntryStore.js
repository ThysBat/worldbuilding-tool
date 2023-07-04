import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import slugify from "slugify";
import { uid } from "uid";

const entriesList = [
  {
    id: 1,
    name: "Introduction",
    slug: "introduction",
    pathPrefix: "/entry/",
    type: "entry",
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
    type: "entry",
    categoryId,
  };
}

function handleGetEntriesByCategoryId(categoryId, entries) {
  return entries
    .slice()
    .filter((category) => category.categoryId === categoryId);
}

export const useEntryStore = create(
  persist(
    immer((set, get) => ({
      entries: entriesList,
      createNewEntry,
      addEntry: (newEntry) =>
        set((state) => {
          state.entries.push(newEntry);
        }),
      getEntryById: (id) => get().entries.find((entry) => entry.id == id),
      getEntriesByCategoryId: (categoryId) =>
        handleGetEntriesByCategoryId(categoryId, get().entries),
      updateEntry: (id, name) => {
        set((state) => {
          const index = state.entries.findIndex((entry) => entry.id == id);
          state.entries[index].name = name;
          state.entries[index].slug = slugify(name, { lower: true });
        });
      },
      deleteEntry: (id) => {
        set((state) => {
          const index = state.entries.findIndex((entry) => entry.id == id);
          state.entries.splice(index, 1);
        });
      },
    })),
    {
      name: "entries",
    }
  )
);

// export const useEntryStore = create(
//   persist(
//     (set, get) => ({
//       entries: entriesList,
//       createNewEntry,
//       addEntry: (newEntry) => set({ entries: [...get().entries, newEntry] }),
//       getEntriesByCategoryId: (categoryId) =>
//         handleGetEntriesByCategoryId(categoryId, get().entries),
//     }),
//     {
//       name: "entries",
//     }
//   )
// );
