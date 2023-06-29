import useStore from "../../hook/useStore";
import { useCategoryStore } from "../../stores/useCategoryStore";
import { useProjectStore } from "../../stores/useProjectStore";
import { useRouter } from "next/router";

import List from "../List";
import AddInputButton from "../AddInputButton";

export default function CategoriesList() {
  const router = useRouter();
  const categoryStore = useStore(useCategoryStore, (state) => state);
  const projectStore = useStore(useProjectStore, (state) => state);

  if (!router || !categoryStore || !projectStore) return <div>Loading...</div>;

  const { createNewCategory, addCategory, getCategoriesByProjectId } =
    categoryStore;
  const { projects } = projectStore;
  const { projectSlug: slug } = router.query;

  const project = projects.find((project) => project.slug === slug);
  const filteredCategories = getCategoriesByProjectId(project.id);

  const sortedCategories = filteredCategories.slice().sort((a, b) => {
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
