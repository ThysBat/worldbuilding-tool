import GlobalStyle from "../styles";
import Head from "next/head";
import slugify from "slugify";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [projectsMockData, setProjectsMockData] = useLocalStorageState(
    "projects",
    {
      defaultValue: projectsList,
    }
  );

  const [categoriesMockData, setcategoriesMockData] = useLocalStorageState(
    "categories",
    {
      defaultValue: categoriesList,
    }
  );

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
        categoriesMockData={categoriesMockData}
      />
    </>
  );
}

const projectsList = [
  {
    id: 1,
    name: "Over the Skies",
    slug: "over-the-skies",
    pathPrefix: "project/",
  },
  {
    id: 2,
    name: "Aventurien",
    slug: "aventurien",
    pathPrefix: "project/",
  },
  {
    id: 3,
    name: "Space World",
    slug: "space-world",
    pathPrefix: "project/",
  },
  {
    id: 4,
    name: "Middle Earth",
    slug: "middle-earth",
    pathPrefix: "project/",
  },
];

const categoriesList = [
  {
    id: 1,
    name: "Geography and Nature",
    slug: "geography-and-nature",
    pathPrefix: "/",
  },
  {
    id: 2,
    name: "Culture",
    slug: "culture",
    pathPrefix: "/",
  },
];
