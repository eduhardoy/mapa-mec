import { HYDRATE } from "next-redux-wrapper";
import * as type from "../types";

const initialState = {
    localizaciones: [],
    departamentos: [],
    localidades: [],
    images: [],
    estados: [],
    ambitos: [],
    internetProveedores: []
};

const preCargaReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.precarga }
        case type.LOAD_LOCALIZACIONES:
            return { ...state, localizaciones: action.payload };
        case type.LOAD_DEPARTAMENTOS:
            return { ...state, departamentos: action.payload };
        case type.LOAD_LOCALIDADES:
            return { ...state, localidades: action.payload };
        case type.LOAD_IMAGES:
            return { ...state, images: action.payload };
        case type.LOAD_ESTADOS:
            return { ...state, estados: action.payload }
        case type.LOAD_AMBITOS:
            return { ...state, ambitos: action.payload }
        case type.LOAD_INTERNET_PROVEEDORES:
            return { ...state, internetProveedores: action.payload }
        default:
            return state;
    }
};

export default preCargaReducer;
