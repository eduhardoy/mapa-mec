import { FETCH_IMAGES } from "../actions/ImagesActions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  images: [],
  loading: false,
  error: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return { ...state, images: action.payload, loading: false };
    default:
      return state;
  }
};

export default imagesReducer;