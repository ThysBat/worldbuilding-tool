import { useRouter } from "next/router";
import useStore from "../../../../../../../hook/useStore";
import { useCategoryStore } from "../../../../../../../stores/useCategoryStore";

import Header from "../../../../../../../components/HeaderEditable";
import EntriesList from "../../../../../../../components/EntriesList";
import DeleteButton, {
  ButtonOnBottomContainer,
} from "../../../../../../../components/DeleteButton";
import ListHeading from "../../../../../../../components/ListHeading";

export default function SubcategoryPage() {
  const router = useRouter();
  const { id } = router.query;

  const categoryStore = useStore(useCategoryStore, (state) => state);

  if (!id || !categoryStore) return <div>Loading...</div>;

  const { getCategoryById, deleteCategory, updateCategory } = categoryStore;

  const category = getCategoryById(id);

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
      <ListHeading>Subentries</ListHeading>
      <EntriesList parent={category} />
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
