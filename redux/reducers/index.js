import { combineReducers } from "redux";
import localizacionesReducer from "./LocalizacionesReducer";

const rootReducer = combineReducers({
  localizacion: localizacionesReducer,
});

export default rootReducer;
