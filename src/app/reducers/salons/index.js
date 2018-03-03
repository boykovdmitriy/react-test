import {Salons} from "constants/salons";

export const initialState = {
    isLoading: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Salons.SALONS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case Salons.SALONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };
        case Salons.SALONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case Salons.SALON_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case Salons.SALON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };
        case Salons.SALON_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};