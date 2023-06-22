import useStore from "../../hook/useStore";
import { useProjectStore } from "../../stores/useProjectStore";

import AddButtonList from "../AddButtonList";

export default function ProjectsList() {
  const projectStore = useStore(useProjectStore, (state) => state);

  if (!projectStore) return <div>Loading...</div>;

  const { projects } = projectStore;

  const sortedProjects = projects.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  return <AddButtonList listItems={sortedProjects}></AddButtonList>;
}
