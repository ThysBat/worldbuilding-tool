import { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../ProjectCard";
import Card from "../Card";
import NewProjectInput from "../NewProjectInput";
import { useRouter } from "next/router";

export default function ProjectsList({ data, handleSave }) {
  const router = useRouter();
  const [inputState, setInputState] = useState(false);
  const [width, setWidth] = useState("6.5rem");

  const sortedProjects = data.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function toggleNewProjectInput() {
    setInputState(!inputState);
    setWidth(!inputState ? "100%" : "6.5rem");
  }

  return (
    <StyledList>
      <li
        style={{
          width: width,
          transition: "width 0.6s ease-out",
          marginRight: width === "100%" ? "1rem" : 0,
        }}
      >
        {inputState ? (
          <NewProjectInput
            width={width}
            onCancel={toggleNewProjectInput}
            onSave={handleSave}
          />
        ) : (
          <AddProjectButton type="button" onClick={toggleNewProjectInput}>
            <Card>{"➕"}</Card>
          </AddProjectButton>
        )}
      </li>

      {sortedProjects.map((project) => {
        return (
          <li key={project.id}>
            <ProjectCard>{project.name}</ProjectCard>
          </li>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;

  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1rem;

  text-align: center;
  list-style: none;
`;

const AddProjectButton = styled.button`
  border: none;
  background-color: inherit;
  display: flex;
  justify-content: center;
`;
