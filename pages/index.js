import styled from "styled-components";
import Heading from "../components/Heading";
import ProjectsList from "../components/ProjectsList";

export default function Home() {
  return (
    <main>
      <Header>
        <Heading>Projects</Heading>
      </Header>
      <ProjectsList />
    </main>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--surface-container-low);
`;
