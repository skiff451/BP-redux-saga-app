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
