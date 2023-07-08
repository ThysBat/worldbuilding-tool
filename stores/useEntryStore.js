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
    reference: {
      id: 3,
      type: "category",
    },
  },
];

function createNewEntry(entryName, referenceId, referenceType) {
  const slug = slugify(entryName, { lower: true });

  return {
    id: uid(),
    name: entryName,
    slug: slug,
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: referenceId,
      type: referenceType,
    },
  };
}

function handleGetEntriesByCategoryId(categoryId, entries) {
  return entries
    .slice()
    .filter((category) => category.categoryId === categoryId);
}
function handleGetEntriesByReferenceId(entries, id, type) {
  return entries
    .slice()
    .filter(({ reference }) => reference.id == id && reference.type === type);
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
      getEntriesByReferenceId: (referenceId, referenceType) =>
        handleGetEntriesByReferenceId(
          get().entries,
          referenceId,
          referenceType
        ),
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
