import * as type from "../types";

const initialState = {
  firstBar: false,
  secondBar: false,
};

const barReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.HAMBURGUER_MENU:
      return { ...state, firstBar: !state.firstBar, secondBar: false };
    case type.SELECT_BAR_ITEM:
      return { ...state, secondBar: action.payload };
    default:
      return state;
  }
};

export default barReducer;
