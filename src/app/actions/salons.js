import {Salons} from "constants";

export function salonsRequest(page, pageSize) {
    return {
        type: Salons.SALONS_REQUEST,
        payload: {page, pageSize},
    };
}

export function salonRequest(salonId) {
    return {
        type: Salons.SALONS_REQUEST,
        payload: {salonId},
    };
}