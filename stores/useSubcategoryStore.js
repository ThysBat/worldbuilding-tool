import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import slugify from "slugify";
import { uid } from "uid";

const subcategoriesList = [
  {
    id: 1,
    name: "Flora",
    slug: "flora",
    pathPrefix: "/subcategory/",
    type: "subcategory",
    categoryId: 4,
  },
  {
    id: 2,
    name: "Fauna",
    slug: "fauna",
    pathPrefix: "/subcategory/",
    type: "subcategory",
    categoryId: 4,
  },
  {
    id: 3,
    name: "Forms of Magic",
    slug: "forms-of-magic",
    pathPrefix: "/subcategory/",
    type: "subcategory",
    categoryId: 3,
  },
  {
    id: 4,
    name: "Limitations",
    slug: "limitations",
    pathPrefix: "/subcategory/",
    type: "subcategory",
    categoryId: 3,
  },
  {
    id: 5,
    name: "Science and Technology",
    slug: "science-and-technology",
    pathPrefix: "/subcategory/",
    type: "subcategory",
    categoryId: 3,
  },
];

function createNewSubcategory(subcategoryName, categoryId) {
  const slug = slugify(subcategoryName, { lower: true });

  return {
    id: uid(),
    name: subcategoryName,
    slug: slug,
    pathPrefix: "/category/",
    type: "category",
    categoryId,
  };
}

function handleGetSubcategoriesByCategoryId(categoryId, subcategories) {
  return subcategories
    .slice()
    .filter((subcategory) => subcategory.categoryId == categoryId);
}

export const useSubcategoryStore = create(
  persist(
    immer((set, get) => ({
      subcategories: subcategoriesList,
      createNewSubcategory,
      addSubcategory: (newSubcategory) =>
        set((state) => {
          state.subcategories.push(newSubcategory);
        }),
      getSubcategoriesByCategoryId: (categoryId) =>
        handleGetSubcategoriesByCategoryId(categoryId, get().subcategories),
      deleteSubcategory: (id) => {
        set((state) => {
          const index = state.subcategories.findIndex(
            (subcategory) => subcategory.id == id
          );
          state.subcategories.splice(index, 1);
        });
      },
    })),
    {
      name: "subcategories",
    }
  )
);
