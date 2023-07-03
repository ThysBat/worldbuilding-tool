import { useRouter } from "next/router";
import useStore from "../../../../../hook/useStore";
import { useCategoryStore } from "../../../../../stores/useCategoryStore";

import styled from "styled-components";
import Heading from "../../../../../components/Heading";
import StyledButton from "../../../../../components/Button";
import EntriesList from "../../../../../components/EntriesList";
import DeleteButton from "../../../../../components/DeleteButton";

export default function CategoryPage() {
  const router = useRouter();
  const { categorySlug: slug, id } = router.query;

  const categoryStore = useStore(useCategoryStore, (state) => state);

  if (!slug || !categoryStore) return <div>Loading...</div>;

  const { categories, deleteCategory } = categoryStore;

  const category = categories.find((category) => category.slug === slug);

  if (!category) return <div>No Data Found</div>;

  function handleDeleteCategory() {
    deleteCategory(id);
    router.back();
  }

  return (
    <>
      <Header>
        <ButtonContainer>
          {/* use a svg for the back button when it comes to styling */}
          <Button onClick={() => router.back()}>{"<"}</Button>
        </ButtonContainer>
        <Heading>{category.name}</Heading>
        <Placeholder></Placeholder>
      </Header>
      <hr />
      <EntriesList />
      <DeleteButton
        whatToDelete={category.name}
        handleDelete={handleDeleteCategory}
      />
    </>
  );
}

const Header = styled.header`
  display: flex;
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
