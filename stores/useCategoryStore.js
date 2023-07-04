import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import slugify from "slugify";
import { uid } from "uid";

const categoriesList = [
  {
    id: 1,
    name: "Geography and Nature",
    slug: "geography-and-nature",
    pathPrefix: "/category/",
    type: "category",
    projectId: 2,
  },
  {
    id: 2,
    name: "Culture",
    slug: "culture",
    pathPrefix: "/category/",
    type: "category",
    projectId: 2,
  },
  {
    id: 3,
    name: "Magic and Technology",
    slug: "magic-and-technology",
    pathPrefix: "/category/",
    type: "category",
    projectId: 1,
  },
  {
    id: 4,
    name: "Geography and Nature",
    slug: "geography-and-nature",
    pathPrefix: "/category/",
    type: "category",
    projectId: 1,
  },
  {
    id: 5,
    name: "Population and Politics",
    slug: "population-and-politics",
    pathPrefix: "/category/",
    type: "category",
    projectId: 2,
  },
  {
    id: 6,
    name: "Culture",
    slug: "culture",
    pathPrefix: "/category/",
    type: "category",
    projectId: 1,
  },
];

function createNewCategory(categoryName, projectId) {
  const slug = slugify(categoryName, { lower: true });

  return {
    id: uid(),
    name: categoryName,
    slug: slug,
    pathPrefix: "/category/",
    type: "category",
    projectId: projectId,
  };
}

function handleGetCategoriesByProjectId(projectId, categories) {
  return categories
    .slice()
    .filter((category) => category.projectId == projectId);
}

export const useCategoryStore = create(
  persist(
    immer((set, get) => ({
      categories: categoriesList,
      createNewCategory,
      addCategory: (newCategory) =>
        set((state) => {
          state.categories.push(newCategory);
        }),
      getCategoriesByProjectId: (projectId) =>
        handleGetCategoriesByProjectId(projectId, get().categories),
      deleteCategory: (id) => {
        set((state) => {
          const index = state.categories.findIndex(
            (category) => category.id == id
          );
          state.categories.splice(index, 1);
        });
      },
    })),
    {
      name: "categories",
    }
  )
);
