import { HYDRATE } from "next-redux-wrapper";
import * as type from "../types";

const initialState = {
  localidades: [],
  error: null,
};

const localidadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.localidad };
    case type.LOAD_LOCALIDADES:
      return { ...state, localidades: action.payload };
    default:
      return state;
  }
};

export default localidadesReducer;
