import {Salons} from "constants/salons";

export const initialState = {
    isLoaded: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Salons.SALONS_REQUEST:
            return {
                ...state,
                isLoaded: false,
            };
        case Salons.SALONS_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                ...action.payload
            };
        case Salons.SALONS_FAILURE:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            };
        case Salons.SALON_REQUEST:
            return {
                ...state,
                isLoaded: false,
            };
        case Salons.SALON_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                ...action.payload
            };
        case Salons.SALON_FAILURE:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            };
        default:
            return state;
    }
};