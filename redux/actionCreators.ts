import actions from "./actions";

export function getSearchFilms(url: string): IFetchAction {
  return {
    type: actions.FETCH_SEARCHED_FILMS,
    payload: {
      url,
    },
  };
}

export function addSearchedFilmsData(data: IFilmsSearchData): IAddAction {
  return {
    type: actions.ADD_SEARCHED_FILMS,
    payload: {
      data: data.titles,
    },
  };
}

export function getFilmInfo(id: string): IFetchFullInfoAction {
  return {
    type: actions.FETCH_FILM_DATA,
    payload: {
      id,
    },
  };
}

export function addFilmInfo(data: IFilmData): IAddFullInfoAction {
  return {
    type: actions.ADD_FILM_DATA,
    payload: {
      data,
    },
  };
}
