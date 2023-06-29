import { useRouter } from "next/router";
import useStore from "../../../../../hook/useStore";
import { useCategoryStore } from "../../../../../stores/useCategoryStore";

import styled from "styled-components";
import Heading from "../../../../../components/Heading";
import StyledButton from "../../../../../components/Button";
import EntriesList from "../../../../../components/EntriesList";

export default function CategoryPage() {
  const router = useRouter();
  const { categorySlug: slug } = router.query;

  const categories = useStore(useCategoryStore, (state) => state.categories);

  if (!categories) return <div>Loading categories...</div>;
  if (!slug) return <p>Loading slug...</p>;

  const category = categories.find((category) => category.slug === slug);

  if (!category) return <div>No Data Found</div>;

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
