import { HYDRATE } from "next-redux-wrapper";
import * as type from "../types";

const initialState = {
  localidades: [],
  localidadesFiltered: [],
  error: null,
};

const localidadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.localidad };
    case type.LOAD_LOCALIDADES:
      return { ...state, localidades: action.payload };
    case type.PUT_LOCALIDADES_FILTERED:
      return { ...state, localidadesFiltered: action.payload }
    default:
      return state;
  }
};

export default localidadesReducer;
