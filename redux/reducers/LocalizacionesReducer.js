import {
  FETCH_LOCALIZACIONES,
} from "../actions/LocalizacionesActions";

const initialState = {
  localizaciones: [],
  loading: false,
  error: null,
};

const localizacionesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCALIZACIONES:
      return { ...state, localizaciones: action.payload, loading: false };
    default:
      return state;
  }
  return { ...state };
};

export default localizacionesReducer;
