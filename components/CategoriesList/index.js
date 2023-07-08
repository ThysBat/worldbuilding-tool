import useStore from "../../hook/useStore";
import { useCategoryStore } from "../../stores/useCategoryStore";

import List from "../List";
import AddInputButton from "../AddInputButton";

export default function CategoriesList({ parent }) {
  const categoryStore = useStore(useCategoryStore, (state) => state);

  if (!categoryStore) return <div>Loading...</div>;

  const { createNewCategory, addCategory, getCategoriesByReferenceId } =
    categoryStore;

  const categories = getCategoriesByReferenceId(parent.id, parent.type);

  const sortedCategories = categories.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function handleSave(categoryName) {
    if (categoryName.length < 1) return;
    const newCategory = createNewCategory(categoryName, parent.id, parent.type);
    addCategory(newCategory);
  }

  return (
    <List listItems={sortedCategories}>
      <AddInputButton as="li" handleSave={handleSave}></AddInputButton>
    </List>
  );
}
