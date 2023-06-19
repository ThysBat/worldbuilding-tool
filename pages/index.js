import Heading from "../components/Heading";
import ProjectsList from "../components/ProjectsList";

export default function Home({ projectsData }) {
  return (
    <main>
      <Heading>Projects</Heading>
      <ProjectsList data={projectsData} />
    </main>
  );
}
