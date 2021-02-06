import * as type from "../types";

//Action Creator
export const selectBar = (selectedBar) => async (dispatch) => {
  dispatch({
    type: type.SELECT_BAR_ITEM,
    payload: selectedBar,
  });
};

export const selectFirstBar = () => async (dispatch) => {
    dispatch({
        type:type.HAMBURGUER_MENU,
    })
}
