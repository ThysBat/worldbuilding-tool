import GlobalStyle from "../styles";
import Head from "next/head";
import slugify from "slugify";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [projectsMockData, setProjectsMockData] = useLocalStorageState(
    "projects",
    {
      defaultValue: projectsList,
    }
  );
  const router = useRouter();

  function handleAddProject(projectName) {
    const nextId = projectsMockData.length + 1;
    const slug = slugify(projectName, { lower: true });

    setProjectsMockData([
      ...projectsMockData,
      {
        id: nextId,
        name: projectName,
        slug: slug,
      },
    ]);

    router.push(`/project/${slug}`);
  }

  console.log(projectsMockData);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        projectsMockData={projectsMockData}
        handleAddProject={handleAddProject}
      />
    </>
  );
}

const projectsList = [
  {
    id: 1,
    name: "Over the Skies",
    slug: "over-the-skies",
  },
  {
    id: 2,
    name: "Aventurien",
    slug: "aventurien",
  },
  {
    id: 3,
    name: "Space World",
    slug: "space-world",
  },
  {
    id: 4,
    name: "Middle Earth",
    slug: "middle-earth",
  },
];
