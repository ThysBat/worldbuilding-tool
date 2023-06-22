import { create } from "zustand";
import { persist } from "zustand/middleware";

import slugify from "slugify";
import { uid } from "uid";

const projectsList = [
  {
    id: 1,
    name: "Over the Skies",
    slug: "over-the-skies",
    pathPrefix: "project/",
  },
  {
    id: 2,
    name: "Aventurien",
    slug: "aventurien",
    pathPrefix: "project/",
  },
  {
    id: 3,
    name: "Space World",
    slug: "space-world",
    pathPrefix: "project/",
  },
  {
    id: 4,
    name: "Middle Earth",
    slug: "middle-earth",
    pathPrefix: "project/",
  },
];

function createNewProject(projectName) {
  const slug = slugify(projectName, { lower: true });

  return {
    id: uid(),
    name: projectName,
    slug: slug,
    pathPrefix: "project/",
  };
}

export const useProjectStore = create(
  persist(
    (set, get) => ({
      projects: projectsList,
      createNewProject,
      addProject: (newProject) =>
        set({ projects: [...get().projects, newProject] }),
    }),
    {
      name: "projects",
    }
  )
);
