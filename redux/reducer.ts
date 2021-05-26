import { combineReducers } from "redux";
import * as actions from "./actionTypes";

const initialSearchFilmsState: ISearchedFilmsState = {
  searchedList: <FilmSearchItem[]>[],
  loading: false,
  error: false,
};

const initialFilmDataState: IFilmDataState = {
  info: <IFilmData>{},
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

const FilmInfo = (state = initialFilmDataState, action: IAddFullInfoAction): IFilmDataState => {
  switch (action.type) {
    case actions.FETCH_FILM_DATA:
      return {
        info: <IFilmData>{},
        loading: true,
        error: false,
      };
    case actions.ADD_FILM_DATA:
      return {
        info: action.payload.data,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default combineReducers({ SearchFilms, FilmInfo });
