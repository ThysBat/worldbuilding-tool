import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import slugify from "slugify";
import { uid } from "uid";

const subentriesList = [
  {
    id: 1,
    name: "Airships",
    slug: "airships",
    pathPrefix: "/subentry/",
    type: "subentry",
    subcategoryId: 5,
  },
  {
    id: 2,
    name: "Dark Magic",
    slug: "dark-magic",
    pathPrefix: "/subentry/",
    type: "subentry",
    subcategoryId: 3,
  },
];

function createNewSubentry(subentryName, subcategoryId) {
  const slug = slugify(subentryName, { lower: true });

  return {
    id: uid(),
    name: subentryName,
    slug: slug,
    pathPrefix: "/subentry/",
    type: "subentry",
    subcategoryId,
  };
}

function handleGetSubentriesBySubcategoryId(subcategoryId, subentries) {
  return subentries
    .slice()
    .filter((category) => category.subcategoryId === subcategoryId);
}

export const useSubentryStore = create(
  persist(
    immer((set, get) => ({
      subentries: subentriesList,
      createNewSubentry,
      addSubentry: (newSubentry) =>
        set((state) => {
          state.subentries.push(newSubentry);
        }),
      getSubentryById: (id) =>
        get().subentries.find((subentry) => subentry.id == id),
      getSubentriesBySubcategoryId: (subcategoryId) =>
        handleGetSubentriesBySubcategoryId(subcategoryId, get().subentries),
      updateSubentry: (id, name) => {
        set((state) => {
          const index = state.subentries.findIndex(
            (subentry) => subentry.id == id
          );
          state.subentries[index].name = name;
          state.subentries[index].slug = slugify(name, { lower: true });
        });
      },
      deleteSubentry: (id) => {
        set((state) => {
          const index = state.subentries.findIndex(
            (subentry) => subentry.id == id
          );
          state.subentries.splice(index, 1);
        });
      },
    })),
    {
      name: "subentries",
    }
  )
);
