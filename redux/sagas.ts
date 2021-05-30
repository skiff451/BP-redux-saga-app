import { takeEvery, call, put, ForkEffect } from "redux-saga/effects";
import * as api from "../api/";
import { addFilmInfo, addSearchedFilmsData } from "./actionCreators";
import actions from "./actions";

export default function* rootSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(actions.FETCH_SEARCHED_FILMS, function* (action: IFetchAction) {
    try {
      const fetchedData: IFilmsSearchData = yield call(async () => {
        return await api.fetchSearchedFilms(action.payload.url);
      });

      yield put(addSearchedFilmsData(fetchedData));
    } catch (e) {
      throw Error(e);
    }
  });

  yield takeEvery(actions.FETCH_FILM_DATA, function* (action: IFetchFullInfoAction) {
    try {
      const fetchedData: IFilmData = yield call(async () => {
        return await api.fetchFilmData(action.payload.id);
      });

      yield put(addFilmInfo(fetchedData));
    } catch (e) {
      throw Error(e);
    }
  });
}
