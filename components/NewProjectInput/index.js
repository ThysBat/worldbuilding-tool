import { useState } from "react";
import useStore from "../../hook/useStore";
import { useProjectStore } from "../../stores/useProjectStore";
import { useRouter } from "next/router";
import styled from "styled-components";

import Card from "../Card";
import Button from "../Button";

export default function Input({ width, onCancel, onSave }) {
  const [newProjectInput, setNewProjectInput] = useState("");
  const router = useRouter();

  const projectStore = useStore(useProjectStore, (state) => state);
  if (!projectStore) return <div>Loading...</div>;
  const { createNewProject, addProject } = projectStore;

  function onClickSave() {
    const newProject = createNewProject(newProjectInput);
    addProject(newProject);
    router.push(`/project/${newProject.slug}`);
  }

  return (
    <Card width={width}>
      <Button type="button" onClick={onCancel}>
        <span role="img">❌</span>
      </Button>
      <StyledInput
        name="newProjectInput"
        value={newProjectInput}
        onChange={(event) => setNewProjectInput(event.target.value)}
      ></StyledInput>
      <Button type="button" onClick={onClickSave}>
        <span role="img">✔️</span>
      </Button>
    </Card>
  );
}

const StyledInput = styled.input`
  width: 70%;
  padding: 1rem;
  opacity: 30%;

  border: none;
  border-radius: 0.6rem;

  &:focus {
    outline: none;
    opacity: 40%;
  }
`;
