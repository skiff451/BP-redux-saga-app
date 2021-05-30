interface FilmSearchItem {
  title: string;
  image: string;
  id: string;
}

interface IFilmsSearchData {
  titles: FilmSearchItem[];
}

interface ISearchedFilmsState {
  searchedList: FilmSearchItem[];
  loading: boolean;
  error: boolean;
}

interface IFilmDataState {
  info: IFilmData;
  loading: boolean;
  error: boolean;
}

interface ICombinedState {
  SearchFilms: ISearchedFilmsState;
  FilmInfo: IFilmDataState;
}

interface IFilmData {
  id: string;
  title: string;
  year: string;
  length: string;
  rating: string;
  rating_votes: string;
  poster: string;
  plot: string;
  trailer: ITrailer;
  cast: ICast[];
}

interface ITrailer {
  id: string;
  link: string;
}

interface ICast {
  actor: string;
  actor_id: string;
  character: string;
}
