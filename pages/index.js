import Heading from "../components/Heading";
import ProjectsList from "../components/ProjectsList";
import { useRouter } from "next/router";
import { useState } from "react";
import slugify from "slugify";

export default function Home({ projectsMockData, handleAddProject }) {
  return (
    <main>
      <Heading>Projects</Heading>
      <ProjectsList data={projectsMockData} handleSave={handleAddProject} />
    </main>
  );
}
