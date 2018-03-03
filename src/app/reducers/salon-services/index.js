import {SalonServices} from "constants/salon-services";

export const initialState = {
    isLoading: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SalonServices.SALON_SERVICES_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case SalonServices.SALON_SERVICES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };
        case SalonServices.SALON_SERVICES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};