import * as type from "../types";

const initialState = {
  firstBar: false,
  secondBar: { bar: false, selected: "" },
};

const barReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.HAMBURGUER_MENU:
      return {
        ...state,
        firstBar: !state.firstBar,
        secondBar: { bar: false, selected: "" },
      };
    case type.SELECT_BAR_ITEM:
      return { ...state, secondBar: action.payload };
    default:
      return state;
  }
};

export default barReducer;
