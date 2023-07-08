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
    reference: {
      id: 2,
      type: "project",
    },
  },
  {
    id: 2,
    name: "Culture",
    slug: "culture",
    pathPrefix: "/category/",
    type: "category",
    projectId: 2,
    reference: {
      id: 2,
      type: "project",
    },
  },
  {
    id: 3,
    name: "Magic and Technology",
    slug: "magic-and-technology",
    pathPrefix: "/category/",
    type: "category",
    projectId: 1,
    reference: {
      id: 1,
      type: "project",
    },
  },
  {
    id: 4,
    name: "Geography and Nature",
    slug: "geography-and-nature",
    pathPrefix: "/category/",
    type: "category",
    projectId: 1,
    reference: {
      id: 1,
      type: "project",
    },
  },
  {
    id: 5,
    name: "Population and Politics",
    slug: "population-and-politics",
    pathPrefix: "/category/",
    type: "category",
    projectId: 2,
    reference: {
      id: 2,
      type: "project",
    },
  },
  {
    id: 6,
    name: "Culture",
    slug: "culture",
    pathPrefix: "/category/",
    type: "category",
    projectId: 1,
    reference: {
      id: 1,
      type: "project",
    },
  },
  {
    id: 7,
    name: "Flora",
    slug: "flora",
    pathPrefix: "/category/",
    type: "category",
    categoryId: 4,
    reference: {
      id: 4,
      type: "category",
    },
  },
  {
    id: 8,
    name: "Fauna",
    slug: "fauna",
    pathPrefix: "/category/",
    type: "category",
    categoryId: 4,
    reference: {
      id: 4,
      type: "category",
    },
  },
  {
    id: 9,
    name: "Forms of Magic",
    slug: "forms-of-magic",
    pathPrefix: "/category/",
    type: "category",
    categoryId: 3,
    reference: {
      id: 3,
      type: "category",
    },
  },
  {
    id: 10,
    name: "Limitations",
    slug: "limitations",
    pathPrefix: "/category/",
    type: "category",
    categoryId: 3,
    reference: {
      id: 3,
      type: "category",
    },
  },
  {
    id: 11,
    name: "Science and Technology",
    slug: "science-and-technology",
    pathPrefix: "/category/",
    type: "category",
    categoryId: 3,
    reference: {
      id: 3,
      type: "category",
    },
  },
];

function createNewCategory(categoryName, referenceId, referenceType) {
  const slug = slugify(categoryName, { lower: true });

  return {
    id: uid(),
    name: categoryName,
    slug: slug,
    pathPrefix: "/category/",
    type: "category",
    reference: {
      id: referenceId,
      type: referenceType,
    },
  };
}

function handleGetCategoriesByReferenceId(categories, id, type) {
  return categories
    .slice()
    .filter(({ reference }) => reference.id == id && reference.type === type);
}

export const useCategoryStore = create(
  persist(
    immer((set, get) => ({
      categories: categoriesList,
      getCategoriesByReferenceId: (referenceId, referenceType) =>
        handleGetCategoriesByReferenceId(
          get().categories,
          referenceId,
          referenceType
        ),
      createNewCategory,
      addCategory: (newCategory) =>
        set((state) => {
          state.categories.push(newCategory);
        }),
      updateCategory: (id, key, value) => {
        set((state) => {
          const index = state.categories.findIndex(
            (category) => category.id == id
          );
          state.categories[index][key] = value;
        });
      },
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
