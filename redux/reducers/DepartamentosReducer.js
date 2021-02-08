import { HYDRATE } from "next-redux-wrapper";
import * as type from "../types";

const initialState = {
  departamentos: [],
  error: null,
};

const departamentosReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.departamento };
    case type.LOAD_DEPARTAMENTOS:
      return { ...state, departamentos: action.payload };
    default:
      return state;
  }
};

export default departamentosReducer;
