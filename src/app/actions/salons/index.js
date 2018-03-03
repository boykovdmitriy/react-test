import {Salons} from "constants/salons";

export function salonsRequest(page, pageSize) {
    return {
        type: Salons.SALONS_REQUEST,
        payload: {page, pageSize},
    };
}

export function salonRequest(salonId) {
    return {
        type: Salons.SALON_REQUEST,
        payload: {salonId},
    };
}