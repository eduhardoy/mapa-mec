import { combineReducers } from "redux";
import barReducer from "./BarReducer";
import departamentosReducer from "./DepartamentosReducer";
import imagesReducer from "./ImagesReducer";
import localidadesReducer from "./LocalidadesReducer";
import localizacionesReducer from "./LocalizacionesReducer";
import marcadoresReducer from "./MarcadoresReducer";

const rootReducer = combineReducers({
  localizacion: localizacionesReducer,
  departamento: departamentosReducer,
  localidad: localidadesReducer,
  marcador: marcadoresReducer,
  imagen: imagesReducer,
  bar: barReducer,
});

export default rootReducer;
