import { takeEvery, call, put, ForkEffect } from "redux-saga/effects";
import { addFilmInfo, addSearchedFilmsData } from "./actionCreators";
import * as actions from "./actionTypes";

function* fetchSearchFilms(action: IFetchAction) {
  try {
    const fetchedData: IFilmsSearchData = yield call(async () => {
      const response = await fetch(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${action.payload.url}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "80636cd22amsh69381db90163ebep1ba62bjsnd02aa3ae19ae",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          },
        },
      );
      return await response.json();
    });
    yield put(addSearchedFilmsData(fetchedData));
  } catch (e) {
    throw Error(e);
  }
}

function* fetchFilmFullInfo(action: IFetchFullInfoAction) {
  try {
    const fetchedData: IFilmData = yield call(async () => {
      const response = await fetch(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${action.payload.id}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "80636cd22amsh69381db90163ebep1ba62bjsnd02aa3ae19ae",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          },
        },
      );
      return await response.json();
    });
    yield put(addFilmInfo(fetchedData));
  } catch (e) {
    throw Error(e);
  }
}

export default function* rootSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(actions.FETCH_SEARCHED_FILMS, fetchSearchFilms);
  yield takeEvery(actions.FETCH_FILM_DATA, fetchFilmFullInfo);
}
