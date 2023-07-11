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
  {
    id: 2,
    name: "Airships",
    slug: "airships",
    pathPrefix: "/entry/",
    type: "entry",
    subcategoryId: 5,
    reference: {
      id: 11,
      type: "category",
    },
  },
  {
    id: 3,
    name: "Dark Magic",
    slug: "dark-magic",
    pathPrefix: "/entry/",
    type: "entry",
    subcategoryId: 3,
    reference: {
      id: 9,
      type: "category",
    },
  },

  {
    id: 7,
    name: "Hobbits",
    slug: "hobbits",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 13,
      type: "category",
    },
  },
  {
    id: 8,
    name: "Treemen",
    slug: "treemen",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 13,
      type: "category",
    },
  },
  {
    id: 9,
    name: "Orcs",
    slug: "orcs",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 13,
      type: "category",
    },
  },

  {
    id: 10,
    name: "Frodo",
    slug: "frodo",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 12,
      type: "category",
    },
  },
  {
    id: 12,
    name: "Gimli",
    slug: "gimli",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 12,
      type: "category",
    },
  },
  {
    id: 14,
    name: "Gandalf",
    slug: "gandalf",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 12,
      type: "category",
    },
  },
  {
    id: 16,
    name: "Saruman",
    slug: "saruman",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 12,
      type: "category",
    },
  },
  {
    id: 17,
    name: "Gollum",
    slug: "gollum",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 12,
      type: "category",
    },
  },
  {
    id: 19,
    name: "Men",
    slug: "men",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 13,
      type: "category",
    },
  },
  {
    id: 22,
    name: "Elves",
    slug: "elves",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 13,
      type: "category",
    },
  },
  {
    id: 25,
    name: "Dwarves",
    slug: "dwarves",
    pathPrefix: "/entry/",
    type: "entry",
    reference: {
      id: 13,
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
