import axios from "axios";

//Action Types
export const FETCH_LOCALIZACIONES = "FETCH_LOCALIZACIONES";

//Action Creator
export const fetchLocalizaciones = () => async (dispatch) => {
  const localizaciones = await axios.get(
    "http://200.10.111.88:1337/localizaciones"
  );
  dispatch({
    type: FETCH_LOCALIZACIONES,
    payload: localizaciones.data,
  });
};

