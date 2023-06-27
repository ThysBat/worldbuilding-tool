import { create } from "zustand";
import { persist } from "zustand/middleware";

import { uid } from "uid";

const sectionsList = [
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

function createNewSection(section, entryId) {
  return {
    id: uid(),
    title: section.title,
    content: section.content,
    entryId,
  };
}

function getSectionsByEntry(entryId, sections) {
  return sections.slice().filter((entry) => entry.entryId === entryId);
}

export const useSectionStore = create(
  persist(
    (set, get) => ({
      sections: sectionsList,
      createNewSection,
      addSection: (newSection) =>
        set({ sections: [...get().sections, newSection] }),
      getSectionsByEntryId: (entryId) =>
        getSectionsByEntry(entryId, get().sections),
    }),
    {
      name: "sections",
    }
  )
);
