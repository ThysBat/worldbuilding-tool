import { useRouter } from "next/router";
import useStore from "../../../hook/useStore";
import { useProjectStore } from "../../../stores/useProjectStore";

import Header from "../../../components/HeaderEditable";
import CategoriesList from "../../../components/CategoriesList";
import DeleteButton, {
  ButtonOnBottomContainer,
} from "../../../components/DeleteButton";
import ListHeading from "../../../components/ListHeading";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const projectStore = useStore(useProjectStore, (state) => state);

  if (!id || !projectStore) return <div>Loading...</div>;

  const { projects, deleteProject, updateProject } = projectStore;

  const project = projects.find((project) => project.slug === slug);

  if (!project) return <div>No Data Found</div>;

  function handleOnSave(newName) {
    updateProject(project.id, "name", newName);
  }

  function handleDeleteProject() {
    deleteProject(id);
    router.back();
  }

  return (
    <>
      <Header onSave={handleOnSave}>{project.name}</Header>
      <hr />
      <ListHeading>Categories</ListHeading>
      <CategoriesList parent={project} />
      <ButtonOnBottomContainer>
        <DeleteButton
          handleDelete={handleDeleteProject}
          itemType={project.type}
          itemName={project.name}
        >
          {`Delete '${project.name}'`}
        </DeleteButton>
      </ButtonOnBottomContainer>
    </>
  );
}
