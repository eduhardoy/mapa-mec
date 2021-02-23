import * as type from "../types";

const initialState = {
    infowindow: {
        show: false,
        data: null
    }
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SHOW_INFO_WINDOW:
            return { ...state, infowindow: action.payload };
        default:
            return state;
    }
};

export default mapReducer;
