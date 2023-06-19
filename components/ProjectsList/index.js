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
  return (
    <StyledList>
      {data.map((project) => {
        return (
          <li key={project.id}>
            <ProjectCard>{project.name}</ProjectCard>
          </li>
        );
      })}
    </StyledList>
  );
}
