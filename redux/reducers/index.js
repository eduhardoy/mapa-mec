import { combineReducers } from "redux";
import barReducer from "./BarReducer";
import marcadoresReducer from "./MarcadoresReducer";
import filtrosReducer from "./FiltrosReducer";
import preCargaReducer from "./PreCargaReducer";
import specialFiltrosReducer from "./SpecialFiltrosReducer";
import headerStateReducer from "./HeaderReducer";
import mapReducer from "./MapReducer"

const rootReducer = combineReducers({
  precarga: preCargaReducer,
  marcador: marcadoresReducer,
  bar: barReducer,
  filtro: filtrosReducer,
  special: specialFiltrosReducer,
  header: headerStateReducer,
  map: mapReducer
});

export default rootReducer;
