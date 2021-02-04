import { combineReducers } from "redux";
import imagesReducer from "./ImagesReducer";
import localizacionesReducer from "./LocalizacionesReducer";
import marcadoresReducer from "./MarcadoresReducer";

const rootReducer = combineReducers({
  localizacion: localizacionesReducer,
  marcador: marcadoresReducer,
  imagen: imagesReducer,
});

export default rootReducer;
