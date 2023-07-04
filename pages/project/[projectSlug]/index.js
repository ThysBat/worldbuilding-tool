import { useRouter } from "next/router";
import useStore from "../../../hook/useStore";
import { useProjectStore } from "../../../stores/useProjectStore";

import styled from "styled-components";
import Heading from "../../../components/Heading";
import StyledButton from "../../../components/Button";
import CategoriesList from "../../../components/CategoriesList";
import DeleteButton from "../../../components/DeleteButton";

export default function ProjectPage() {
  const router = useRouter();
  const { projectSlug: slug, id } = router.query;

  const projectStore = useStore(useProjectStore, (state) => state);

  if (!slug || !projectStore) return <div>Loading...</div>;

  const { projects, deleteProject } = projectStore;

  const project = projects.find((project) => project.slug === slug);

  if (!project) return <div>No Data Found</div>;

  function handleDeleteProject() {
    deleteProject(id);
    router.back();
  }

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
      <DeleteButton
        handleDelete={handleDeleteProject}
        itemType={project.type}
        itemName={project.name}
      >
        {`Delete '${project.name}'`}
      </DeleteButton>
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
