import styled from "styled-components";
import ProjectCard from "../ProjectCard";

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;

  flex-direction: row;
  flex-wrap: wrap;

  text-align: center;
  list-style: none;
`;

export default function ProjectsList({ data }) {
  const sortedProjects = data.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  return (
    <StyledList>
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
