import { combineReducers } from "redux";
import barReducer from "./BarReducer";
import marcadoresReducer from "./MarcadoresReducer";
import filtrosReducer from "./FiltrosReducer";
import preCargaReducer from "./PreCargaReducer";
import headerStateReducer from "./HeaderReducer";
import mapReducer from "./MapReducer"

const rootReducer = combineReducers({
  precarga: preCargaReducer,
  marcador: marcadoresReducer,
  bar: barReducer,
  filtro: filtrosReducer,
  header: headerStateReducer,
  map: mapReducer
});

export default rootReducer;
