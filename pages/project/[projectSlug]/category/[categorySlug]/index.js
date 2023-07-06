import { useRouter } from "next/router";
import useStore from "../../../../../hook/useStore";
import { useCategoryStore } from "../../../../../stores/useCategoryStore";

import Header from "../../../../../components/HeaderEditable";
import SubcategoriesList from "../../../../../components/SubcategoriesList";
import EntriesList from "../../../../../components/EntriesList";
import DeleteButton, {
  ButtonOnBottomContainer,
} from "../../../../../components/DeleteButton";
import ListHeading from "../../../../../components/ListHeading";

export default function CategoryPage() {
  const router = useRouter();
  const { categorySlug: slug, id } = router.query;

  const categoryStore = useStore(useCategoryStore, (state) => state);

  if (!slug || !categoryStore) return <div>Loading...</div>;

  const { categories, deleteCategory, updateCategory } = categoryStore;

  const category = categories.find((category) => category.slug === slug);

  if (!category) return <div>No Data Found</div>;

  function handleSaveCategoryName(newName) {
    updateCategory(category.id, "name", newName);
  }

  function handleDeleteCategory() {
    deleteCategory(id);
    router.back();
  }

  return (
    <>
      <Header onSave={handleSaveCategoryName}>{category.name}</Header>
      <hr />
      <ListHeading>Subcategories</ListHeading>
      <SubcategoriesList />
      <ListHeading>Entries</ListHeading>
      <EntriesList />
      <ButtonOnBottomContainer>
        <DeleteButton
          handleDelete={handleDeleteCategory}
          itemType={category.type}
          itemName={category.name}
        >
          {`Delete '${category.name}'`}
        </DeleteButton>
      </ButtonOnBottomContainer>
    </>
  );
}
