import { HYDRATE } from "next-redux-wrapper";
import * as type from "../types";

const initialState = {
  localizaciones: [],
  loading: false,
  error: null,
};

const localizacionesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload.localizacion}
    case type.LOAD_LOCALIZACIONES:
      return { ...state, localizaciones: action.payload, loading: false };
    default:
      return state;
  }
};

export default localizacionesReducer;
