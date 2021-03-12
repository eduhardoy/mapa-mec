import * as type from "../types";

const initialState = {
    buscador: "NOMBRE"
};

const headerStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SET_HEADER_STATE:
            return { buscador: action.payload };
        default:
            return state;
    }
};

export default headerStateReducer;
