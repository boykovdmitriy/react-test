import expect from 'expect';

import {salonRequest, salonsRequest} from "./index";
import {Salons} from "constants/salons";

describe('salons actions', () => {
    it('should create an action for requesting a salon', () => {
        const salonId = 100;
        const action = salonRequest(salonId);
        expect(action).toEqual({
            type: Salons.SALON_REQUEST,
            payload: {salonId}
        });
    });
    it('should create an action for requesting a list of salons', () => {
        const pageSize = 100;
        const page = 10;
        const action = salonsRequest(page, pageSize);
        expect(action).toEqual({
            type: Salons.SALONS_REQUEST,
            payload: {page, pageSize}
        });
    });
});
