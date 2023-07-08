import { useRouter } from "next/router";
import useStore from "../../../../../../../hook/useStore";
import { useSubcategoryStore } from "../../../../../../../stores/useSubcategoryStore";

import Header from "../../../../../../../components/HeaderEditable";
import SubentriesList from "../../../../../../../components/SubentriesList";
import DeleteButton, {
  ButtonOnBottomContainer,
} from "../../../../../../../components/DeleteButton";
import ListHeading from "../../../../../../../components/ListHeading";

export default function SubcategoryPage() {
  const router = useRouter();
  const { subcategorySlug: slug, id } = router.query;

  const subcategoryStore = useStore(useSubcategoryStore, (state) => state);

  if (!slug || !subcategoryStore) return <div>Loading...</div>;

  const { subcategories, deleteSubcategory, updateSubcategory } =
    subcategoryStore;

  const subcategory = subcategories.find(
    (subcategory) => subcategory.slug === slug
  );

  if (!subcategory) return <div>No Data Found</div>;

  function handleSaveSubcategoryName(newName) {
    updateSubcategory(subcategory.id, "name", newName);
  }

  function handleDeleteSubcategory() {
    deleteSubcategory(id);
    router.back();
  }

  return (
    <>
      <Header onSave={handleSaveSubcategoryName}>{subcategory.name}</Header>
      <hr />
      <ListHeading>Subentries</ListHeading>
      <SubentriesList />
      <ButtonOnBottomContainer>
        <DeleteButton
          handleDelete={handleDeleteSubcategory}
          itemType={subcategory.type}
          itemName={subcategory.name}
        >
          {`Delete '${subcategory.name}'`}
        </DeleteButton>
      </ButtonOnBottomContainer>
    </>
  );
}
