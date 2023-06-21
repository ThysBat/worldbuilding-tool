import { useState } from "react";
import useStore from "../../hook/useStore";
import { useProjectStore } from "../../stores/useProjectStore";

import AddButtonList from "../AddButtonList";

export default function ProjectsList({ handleSave }) {
  const [inputState, setInputState] = useState(false);
  const [inputWidth, setInputWidth] = useState("6.5rem");

  const projectStore = useStore(useProjectStore, (state) => state);
  if (!projectStore) return <div>Loading...</div>;
  const { projects } = projectStore;

  const sortedProjects = projects.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function toggleNewProjectInput() {
    setInputState(!inputState);
    setInputWidth(!inputState ? "100%" : "6.5rem");
  }

  return (
    <AddButtonList
      listItems={sortedProjects}
      handleSave={handleSave}
    ></AddButtonList>
  );
}
