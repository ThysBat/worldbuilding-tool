import { useRouter } from "next/router";
import useStore from "../../../hook/useStore";
import { useProjectStore } from "../../../stores/useProjectStore";

import styled from "styled-components";
import Heading from "../../../components/Heading";
import StyledButton from "../../../components/Button";
import CategoriesList from "../../../components/CategoriesList";

export default function ProjectPage() {
  const router = useRouter();
  const { projectSlug: slug } = router.query;

  const projects = useStore(useProjectStore, (state) => state.projects);

  if (!slug || !projects) return <div>Loading...</div>;

  const project = projects.find((project) => project.slug === slug);

  if (!project) return <div>No Data Found</div>;

  return (
    <>
      <Header>
        <ButtonContainer>
          {/* use a svg for the back button when it comes to styling */}
          <Button onClick={() => router.back()}>{"<"}</Button>
        </ButtonContainer>
        <Heading>{project.name}</Heading>
        <Placeholder></Placeholder>
      </Header>
      <hr />
      <CategoriesList></CategoriesList>
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
