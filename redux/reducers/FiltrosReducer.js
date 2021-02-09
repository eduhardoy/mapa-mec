import * as type from "../types";

const initialState = {
  departamentos: [],
  localidades: [],
  dependencia: [],
  estado: [],
  jurisdiccion: [],
  organismoDependencia: [],
  nivel: [],
  modalidad: [],
  gestion: [],
  ambito: [],
  aulaDigitalMovil: [],
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
    default:
      return state;
  }
};

export default filtrosReducer;