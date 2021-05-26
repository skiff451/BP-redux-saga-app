import { useSelector } from "react-redux";
import SearchedFilmItem from "../SearchedFilmItem/SearchedFilmItem";
import SearchInput from "../SearchInput/SearchInput";
import Spinner from "../Spinner/Spinner";

import styles from "./SearchedFilms.module.scss";

function SearchedFilms(): JSX.Element {
  const searchedState = useSelector((state: ICombinedState) => state.SearchFilms);

  const { searchedList: films, loading } = searchedState;

  function setFilmsList(films: FilmSearchItem[]): JSX.Element[] {
    const filmsList = films?.map((film) => (
      <SearchedFilmItem key={film.id} title={film.title} image={film.image} id={film.id} />
    ));
    return filmsList;
  }

  return (
    <div className={styles["search-wrapper"]}>
      <SearchInput />
      <div className={styles["films-wrapper"]}>{loading ? <Spinner /> : setFilmsList(films)}</div>
    </div>
  );
}

export default SearchedFilms;
