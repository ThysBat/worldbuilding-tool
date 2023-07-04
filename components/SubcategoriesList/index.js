import useStore from "../../hook/useStore";
import { useSubcategoryStore } from "../../stores/useSubcategoryStore";
import { useCategoryStore } from "../../stores/useCategoryStore";
import { useRouter } from "next/router";

import List from "../List";
import AddInputButton from "../AddInputButton";

export default function CategoriesList() {
  const router = useRouter();
  const subcategoryStore = useStore(useSubcategoryStore, (state) => state);
  const categoryStore = useStore(useCategoryStore, (state) => state);

  if (!router || !subcategoryStore || !categoryStore)
    return <div>Loading...</div>;

  const { createNewSubcategory, addSubcategory, getSubcategoriesByCategoryId } =
    subcategoryStore;
  const { categories } = categoryStore;
  const { categorySlug: slug } = router.query;

  const category = categories.find((category) => category.slug === slug);
  const filteredSubcategories = getSubcategoriesByCategoryId(category.id);

  const sortedSubcategories = filteredSubcategories.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function handleSave(subcategoryName) {
    if (subcategoryName.length < 1) return;
    const newSubcategory = createNewSubcategory(subcategoryName, category.id);
    addSubcategory(newSubcategory);
  }

  return (
    <List listItems={sortedSubcategories}>
      <AddInputButton as="li" handleSave={handleSave}></AddInputButton>
    </List>
  );
}
