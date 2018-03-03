import {SalonServices} from "constants/salon-services";

export function salonServicesRequest(salonId) {
    return {
        type: SalonServices.SALON_SERVICES_REQUEST,
        payload: {salonId},
    };
}