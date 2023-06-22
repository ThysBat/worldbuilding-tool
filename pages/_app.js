import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [categoriesMockData, setcategoriesMockData] = useLocalStorageState(
    "categories",
    {
      defaultValue: categoriesList,
    }
  );

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} categoriesMockData={categoriesMockData} />
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
