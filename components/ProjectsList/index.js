import useStore from "../../hook/useStore";
import { useProjectStore } from "../../stores/useProjectStore";
import { useRouter } from "next/router";

import List from "../List";
import AddInputButton from "../AddInputButton";

export default function ProjectsList() {
  const router = useRouter();
  const projectStore = useStore(useProjectStore, (state) => state);

  if (!projectStore) return <div>Loading...</div>;

  const { projects, createNewProject, addProject } = projectStore;

  const sortedProjects = projects.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function handleSave(projectName) {
    if (projectName.length < 1) return;
    const newProject = createNewProject(projectName);
    addProject(newProject);
    router.push(
      `/${newProject.pathPrefix + newProject.slug}?id=${newProject.id}`
    );
  }

  return (
    <List listItems={sortedProjects}>
      <AddInputButton as="li" handleSave={handleSave}></AddInputButton>
    </List>
  );
}
