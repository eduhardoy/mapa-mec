import axios from "axios";

//Action Types
export const UPDATE_MARCADORES = "UPDATE_MARCADORES";

//Action Creator
export const updateMarcadores = (marcadoresFiltrados) => async (dispatch) => {
  dispatch({
    type: UPDATE_MARCADORES,
    payload: marcadoresFiltrados,
  });
};
