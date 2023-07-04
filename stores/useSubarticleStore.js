import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { uid } from "uid";

const subarticlesList = [
  {
    id: 1,
    title: "Introduction",
    content:
      "Dark Magic is one of two sources of magic in this world. Dark magic can use every energy that consists of a dark or negative aura.",
    type: "subarticle",
    subentryId: 2,
  },
  {
    id: 2,
    title: "Usecases",
    content:
      "Dark magic is used everywhere where there is suffering that wants to be turned into something good. But beware, do not try and change the energy you want to use for your magic!",
    type: "subarticle",
    subentryId: 2,
  },
];

function createNewSubarticle(subentryId) {
  return {
    id: uid(),
    title: "",
    content: "",
    type: "subarticle",
    subentryId,
  };
}

function handleGetSubarticlesBySubentryId(subentryId, subarticles) {
  return subarticles.slice().filter((entry) => entry.subentryId === subentryId);
}

export const useSubarticleStore = create(
  persist(
    immer((set, get) => ({
      subarticles: subarticlesList,
      createNewSubarticle,
      addSubarticle: (newSubarticle) =>
        set((state) => {
          state.subarticles.push(newSubarticle);
        }),
      getSubarticleById: (id) =>
        get().subarticles.find((subarticle) => subarticle.id == id),
      getSubarticlesBySubentryId: (subentryId) =>
        handleGetSubarticlesBySubentryId(subentryId, get().subarticles),
      updateSubarticle: (id, key, value) => {
        set((state) => {
          const index = state.subarticles.findIndex(
            (subarticle) => subarticle.id == id
          );
          state.subarticles[index][key] = value;
        });
      },
      deleteSubarticle: (id) => {
        set((state) => {
          const index = state.subarticles.findIndex(
            (subarticle) => subarticle.id == id
          );
          state.subarticles.splice(index, 1);
        });
      },
    })),
    {
      name: "subarticles",
    }
  )
);
