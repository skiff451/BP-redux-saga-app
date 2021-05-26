import Head from "next/head";
import { Provider } from "react-redux";
import FilmData from "../Components/FilmData/FilmData";

import SearchedFilms from "../Components/SearchedFilms/SearchedFilms";
import store from "../redux/store";

import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <Provider store={store}>
      <Head>
        <title>Films app</title>
        <meta name="description" content="choose your favorite film" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchedFilms />
        <FilmData />
      </main>
    </Provider>
  );
}
