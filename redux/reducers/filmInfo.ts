import actions from "../actions";

const initialFilmDataState: IFilmDataState = {
  info: <IFilmData>{},
  loading: false,
  error: false,
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

export default FilmInfo;
