import { combineReducers } from "redux";
import barReducer from "./BarReducer";
import marcadoresReducer from "./MarcadoresReducer";
import filtrosReducer from "./FiltrosReducer";
import preCargaReducer from "./PreCargaReducer";
import specialFiltrosReducer from "./SpecialFiltrosReducer";

const rootReducer = combineReducers({
  precarga: preCargaReducer,
  marcador: marcadoresReducer,
  bar: barReducer,
  filtro: filtrosReducer,
  special: specialFiltrosReducer,
});

export default rootReducer;
