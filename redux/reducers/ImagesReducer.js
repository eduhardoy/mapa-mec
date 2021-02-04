import { HYDRATE } from "next-redux-wrapper";
import * as type from "../types";

const initialState = {
  images: [],
  loading: false,
  error: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload.imagen}
    case type.LOAD_IMAGES:
      return { ...state, images: action.payload, loading: false };
    default:
      return state;
  }
};

export default imagesReducer;
