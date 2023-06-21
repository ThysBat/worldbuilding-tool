import { useState } from "react";
import AddButtonList from "../AddButtonList";

export default function ProjectsList({ data, handleSave }) {
  const [inputState, setInputState] = useState(false);
  const [inputWidth, setInputWidth] = useState("6.5rem");

  const sortedProjects = data.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function toggleNewProjectInput() {
    setInputState(!inputState);
    setInputWidth(!inputState ? "100%" : "6.5rem");
  }

  return <AddButtonList listItems={sortedProjects}></AddButtonList>;
}
