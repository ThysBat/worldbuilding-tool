import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} projectsData={projectsMockData} />
    </>
  );
}

const projectsMockData = [
  {
    id: 1,
    name: "Aventurien",
  },
  {
    id: 2,
    name: "Middle Earth",
  },
  {
    id: 3,
    name: "Space World",
  },
  {
    id: 4,
    name: "Over the Skies",
  },
];
