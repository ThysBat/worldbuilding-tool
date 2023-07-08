import useStore from "../../hook/useStore";
import { useCategoryStore } from "../../stores/useCategoryStore";
import { useRouter } from "next/router";

import List from "../List";
import AddInputButton from "../AddInputButton";

export default function CategoriesList({ parent }) {
  const router = useRouter();
  const categoryStore = useStore(useCategoryStore, (state) => state);

  if (!router || !categoryStore) return <div>Loading...</div>;

  const { createNewCategory, addCategory, getCategoriesByProjectId } =
    categoryStore;
  const categories = getCategoriesByProjectId(parent.id);

  const sortedCategories = categories.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function handleSave(categoryName) {
    if (categoryName.length < 1) return;
    const newCategory = createNewCategory(categoryName, project.id);
    addCategory(newCategory);
  }

  return (
    <List listItems={sortedCategories}>
      <AddInputButton as="li" handleSave={handleSave}></AddInputButton>
    </List>
  );
}
