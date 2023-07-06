import { useRouter } from "next/router";
import useStore from "../../../../../../../hook/useStore";
import { useSubcategoryStore } from "../../../../../../../stores/useSubcategoryStore";

import styled from "styled-components";
import Heading from "../../../../../../../components/Heading";
import StyledButton from "../../../../../../../components/Button";
import SubentriesList from "../../../../../../../components/SubentriesList";
import DeleteButton from "../../../../../../../components/DeleteButton";
import ListHeading from "../../../../../../../components/ListHeading";

export default function SubcategoryPage() {
  const router = useRouter();
  const { subcategorySlug: slug, id } = router.query;

  const subcategoryStore = useStore(useSubcategoryStore, (state) => state);

  if (!slug || !subcategoryStore) return <div>Loading...</div>;

  const { subcategories, deleteSubcategory } = subcategoryStore;

  const subcategory = subcategories.find(
    (subcategory) => subcategory.slug === slug
  );

  if (!subcategory) return <div>No Data Found</div>;

  function handleDeleteSubcategory() {
    deleteSubcategory(id);
    router.back();
  }

  return (
    <>
      <Header>
        <ButtonContainer>
          {/* use a svg for the back button when it comes to styling */}
          <Button onClick={() => router.back()}>{"<"}</Button>
        </ButtonContainer>
        <Heading>{subcategory.name}</Heading>
        <Placeholder />
      </Header>
      <hr />
      <ListHeading>Subentries</ListHeading>
      <SubentriesList />
      <DeleteButton
        handleDelete={handleDeleteSubcategory}
        itemType={subcategory.type}
        itemName={subcategory.name}
      >
        {`Delete '${subcategory.name}'`}
      </DeleteButton>
    </>
  );
}

const Header = styled.header`
  display: flex;
  background-color: var(--surface-container-low);
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(StyledButton)`
  font-size: 2rem;
`;

const Placeholder = styled.div`
  flex: 1;
`;
