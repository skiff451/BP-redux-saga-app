interface IAddAction {
  type: string;
  payload: {
    data: FilmSearchItem[];
  };
}

interface IFetchAction {
  type: string;
  payload: {
    url: string;
  };
}

interface IFetchFullInfoAction {
  type: string;
  payload: {
    id: string;
  };
}

interface IAddFullInfoAction {
  type: string;
  payload: {
    data: IFilmData;
  };
}
