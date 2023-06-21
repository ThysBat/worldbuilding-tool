import { create } from "zustand";
import { persist } from "zustand/middleware";

import slugify from "slugify";

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

function handleAddProject(projectName, projects) {
  const nextId = projects.length + 1;
  const slug = slugify(projectName, { lower: true });

  return [
    ...projects,
    {
      id: nextId,
      name: projectName,
      slug: slug,
      pathPrefix: "project/",
    },
  ];

  // router.push(`/project/${slug}`);
}

export const useProjectStore = create(
  persist(
    (set, get) => ({
      projects: projectsList,
      addProject: (projectName) =>
        set({ projects: handleAddProject(projectName, get().projects) }),
    }),
    {
      name: "projects",
    }
  )
);
