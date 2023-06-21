import Heading from "../components/Heading";
import ProjectsList from "../components/ProjectsList";

export default function Home({ projectsMockData, handleAddProject }) {
  return (
    <main>
      <Heading>Projects</Heading>
      <ProjectsList data={projectsMockData} handleSave={handleAddProject} />
    </main>
  );
}
