import GlobalStyle from "../styles";
import styled from "styled-components";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Main className={inter.className}>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
