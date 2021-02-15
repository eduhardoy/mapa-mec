import { combineReducers } from "redux";
import barReducer from "./BarReducer";
import marcadoresReducer from "./MarcadoresReducer";
import filtrosReducer from "./FiltrosReducer";
import preCargaReducer from './PreCargaReducer'

const rootReducer = combineReducers({
  precarga: preCargaReducer,
  marcador: marcadoresReducer,
  bar: barReducer,
  filtro: filtrosReducer,
});

export default rootReducer;
