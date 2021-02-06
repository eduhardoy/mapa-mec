import * as type from "../types";

const initialState = {
  marcadores: [],
};

const marcadoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_MARCADORES:
      return { ...state, marcadores: action.payload };
    default:
      return state;
  }
};

export default marcadoresReducer;
