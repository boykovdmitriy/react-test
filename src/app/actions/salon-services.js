import {SalonServices} from "constants";

export function salonServicesRequest(salonId) {
    return {
        type: SalonServices.SALON_SERVICES_REQUEST,
        payload: {salonId},
    };
}