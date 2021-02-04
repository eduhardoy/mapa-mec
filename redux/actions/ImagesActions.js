import axios from "axios";
import {HYDRATE} from 'next-redux-wrapper'

//Action Types
export const FETCH_IMAGES = "FETCH_IMAGES";

//Action Creator
export const fetchImages = () => async (dispatch) => {
  const images = await axios.get(
    "http://200.10.111.88:1337/imagenes"
  );
  dispatch({
    type: FETCH_IMAGES,
    payload: images.data,
  });
};