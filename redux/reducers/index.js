import { combineReducers } from "redux";
import barReducer from "./BarReducer";
import imagesReducer from "./ImagesReducer";
import localizacionesReducer from "./LocalizacionesReducer";
import marcadoresReducer from "./MarcadoresReducer";

const rootReducer = combineReducers({
  localizacion: localizacionesReducer,
  marcador: marcadoresReducer,
  imagen: imagesReducer,
  bar: barReducer,
});

export default rootReducer;
