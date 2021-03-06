import * as type from "../types";

const initialState = {
  header: [],
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
  agrupaciones: [],
  cabeceras: [],
  planConectividad: [],
};

const filtrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_HEADER:
      return { ...state, header: action.payload }
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
    case type.SET_ORGANISMO_DEPENDENIA:
      return { ...state, organismoDependencias: action.payload }
    case type.SET_NIVEL:
      return { ...state, niveles: action.payload }
    case type.SET_MODALIDAD:
      return { ...state, modalidades: action.payload }
    case type.SET_GESTION:
      return { ...state, gestiones: action.payload }
    case type.SET_AMBITO:
      return { ...state, ambitos: action.payload }
    case type.SET_INTENET:
      return { ...state, internet: action.payload }
    case type.SET_PROVEEDORES_INTERNET:
      return { ...state, proveedoresInternet: action.payload }
    case type.SET_CABECERAS:
      return { ...state, cabeceras: action.payload };
    case type.SET_AULA_DIGITAL_MOVIL:
      return { ...state, aulaDigitalMoviles: action.payload }
    case type.SET_PLAN_CONECTIVIDAD:
      return { ...state, planConectividad: action.payload }
    case type.SET_AGUA_POTABLE:
      return { ...state, aguaPotable: action.payload }
    case type.SET_AGRUPACIONES:
      return { ...state, agrupaciones: action.payload }
    default:
      return state;
  }
};

export default filtrosReducer;