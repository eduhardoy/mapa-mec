import * as type from "../types";

const initialState = {
  departamentos: [],
  localidades: [],
  localidadesFiltered: [],
  dependencias: ["Provincial"],
  estados: [1],
  jurisdicciones: [],
  organismoDependencias: [],
  niveles: [],
  modalidades: [],
  gestiones: [],
  ambitos: [],
  aulaDigitalMoviles: [],
  internet: [],
  aguaPotable: [],
  proveedoresInternet: [],
  agrupaciones: []
};

const filtrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_DEPARTAMENTOS:
      return { ...state, departamentos: action.payload };
    case type.SET_LOCALIDADES:
      return { ...state, localidades: action.payload }
    case type.PUT_LOCALIDADES_FILTERED:
      return { ...state, localidadesFiltered: action.payload }
    case type.SET_DEPENDENCIA:
      return { ...state, dependencias: action.payload }
    case type.SET_ESTADO:
      return { ...state, estados: action.payload }
    case type.SET_JURISDICCION:
      return { ...state, jurisdicciones: action.payload }
    default:
      return state;
  }
};

export default filtrosReducer;