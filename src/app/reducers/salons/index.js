import {Salons} from "constants/salons";

export const initialState = {
    list: {
        isLoading: false,
        items: [],
    },
    item: {
        isLoading: false,
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Salons.SALONS_REQUEST:
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: true,
                    page: action.payload.page
                },
            };
        case Salons.SALONS_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    items: [...state.list.items, ...action.payload.salons],
                    total: action.payload.total,
                    isLoading: false,
                },
            };
        case Salons.SALONS_FAILURE:
            return {
                ...state,
                list: {
                    ...state.list,
                    error: action.payload,
                    isLoading: false,
                }
            };
        case Salons.SALON_REQUEST:
            return {
                ...state,
                item: {
                    isLoading: true,
                }
            };
        case Salons.SALON_SUCCESS:
            return {
                ...state,
                item: {
                    isLoading: false,
                    ...action.payload
                }
            };
        case Salons.SALON_FAILURE:
            return {
                ...state,
                item: {
                    isLoading: false,
                    error: action.payload
                }
            };
        default:
            return state;
    }
};