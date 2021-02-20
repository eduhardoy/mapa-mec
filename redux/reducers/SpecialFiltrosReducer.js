import * as type from "../types";

const initialState = {
  cabeceras: [],
};

const specialFiltrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_CABECERAS:
      return { ...state, cabeceras: action.payload };
    default:
      return state;
  }
};

export default specialFiltrosReducer;
