import { create } from "zustand";
import { persist } from "zustand/middleware";

import slugify from "slugify";
import { uid } from "uid";

const categoriesList = [
  {
    id: 1,
    name: "Geography and Nature",
    slug: "geography-and-nature",
    pathPrefix: "/category/",
    projectId: 2,
  },
  {
    id: 2,
    name: "Culture",
    slug: "culture",
    pathPrefix: "/category/",
    projectId: 2,
  },
  {
    id: 3,
    name: "Magic and Technology",
    slug: "magic-and-technology",
    pathPrefix: "/category/",
    projectId: 1,
  },
  {
    id: 4,
    name: "Geography and Nature",
    slug: "geography-and-nature",
    pathPrefix: "/category/",
    projectId: 1,
  },
  {
    id: 5,
    name: "Population and Politics",
    slug: "population-and-politics",
    pathPrefix: "/category/",
    projectId: 2,
  },
];

function createNewCategory(categoryName, projectId) {
  const slug = slugify(categoryName, { lower: true });

  return {
    id: uid(),
    name: categoryName,
    slug: slug,
    pathPrefix: "/category/",
    projectId: projectId,
  };
}

function getCategoriesByProject(projectId, categories) {
  return categories
    .slice()
    .filter((category) => category.projectId === projectId);
}

export const useCategoryStore = create(
  persist(
    (set, get) => ({
      categories: categoriesList,
      createNewCategory,
      addCategory: (newCategory) =>
        set({ categories: [...get().categories, newCategory] }),
      getCategoriesByProjectId: (projectId) =>
        getCategoriesByProject(projectId, get().categories),
    }),
    {
      name: "categories",
    }
  )
);
