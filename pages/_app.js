import GlobalStyle from "../styles";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
