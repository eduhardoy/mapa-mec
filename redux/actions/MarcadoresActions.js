import * as type from "../types";

//Action Creator
export const updateMarcadores = (marcadoresFiltrados) => async (dispatch) => {
  dispatch({
    type: type.UPDATE_MARCADORES,
    payload: marcadoresFiltrados,
  });
};
