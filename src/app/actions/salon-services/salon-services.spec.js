import expect from 'expect';

import {salonServicesRequest} from "./index";
import {SalonServices} from "constants/salon-services";

describe('salon services actions', () => {
    it('should create an action for requesting salon services', () => {
        const salonId = 100;
        const action = salonServicesRequest(salonId);
        expect(action).toEqual({
            type: SalonServices.SALON_SERVICES_REQUEST,
            payload: {salonId}
        });
    });
});
