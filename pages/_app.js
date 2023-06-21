import GlobalStyle from "../styles";
import Head from "next/head";
import slugify from "slugify";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import useStore from "../hook/useStore";
import { useProjectStore } from "../stores/useProjectStore";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [categoriesMockData, setcategoriesMockData] = useLocalStorageState(
    "categories",
    {
      defaultValue: categoriesList,
    }
  );

  const projects = useStore(useProjectStore, (state) => state.projects);
  if (!projects) return <div>Loading...</div>;

  function handleAddProject(projectName) {
    console.log(projectName);

    const nextId = projects.length + 1;
    const slug = slugify(projectName, { lower: true });

    useProjectStore.setState([
      ...projects,
      {
        id: nextId,
        name: projectName,
        slug: slug,
        pathPrefix: "project/",
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
        handleAddProject={handleAddProject}
        categoriesMockData={categoriesMockData}
      />
    </>
  );
}

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
