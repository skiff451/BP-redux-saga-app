import actions from "../actions";

const initialSearchFilmsState: ISearchedFilmsState = {
  searchedList: <FilmSearchItem[]>[],
  loading: false,
  error: false,
};

const SearchFilms = (state = initialSearchFilmsState, action: IAddAction): ISearchedFilmsState => {
  switch (action.type) {
    case actions.FETCH_SEARCHED_FILMS:
      return {
        searchedList: <FilmSearchItem[]>[],
        loading: true,
        error: false,
      };
    case actions.ADD_SEARCHED_FILMS:
      return {
        searchedList: action.payload.data,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default SearchFilms;
