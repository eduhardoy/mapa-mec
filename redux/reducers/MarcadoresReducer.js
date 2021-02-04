import { UPDATE_MARCADORES } from "../actions/MarcadoresActions";

const initialState = {
  marcadores: [],
};

const marcadoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MARCADORES:
      return { ...state, marcadores: action.payload };
    default:
      return state;
  }
};

export default marcadoresReducer;
