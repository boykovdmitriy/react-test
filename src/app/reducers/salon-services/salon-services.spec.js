import expect from 'expect';

import {reducer, initialState} from './index';
import {SalonServices} from "constants/salon-services";
import mocks from './mocks'

describe('salon services reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should handle SalonServices.SALON_SERVICES_REQUEST', () => {
        const action = {
            type: SalonServices.SALON_SERVICES_REQUEST
        };
        expect(reducer(undefined, action).isLoading).toEqual(true);
    });
    it('should handle SalonServices.SALON_SERVICES_SUCCESS', () => {
        const action = {
            type: SalonServices.SALON_SERVICES_SUCCESS,
            payload: mocks.salonServicesSuccess
        };
        expect(reducer(undefined, action)).toEqual({
            isLoading: false,
            ...mocks.salonServicesSuccess
        });
    });
    it('should handle SalonServices.SALON_SERVICES_FAILURE', () => {
        const action = {
            type: SalonServices.SALON_SERVICES_FAILURE,
            payload: "error"
        };
        expect(reducer(undefined, action).error).toEqual(action.payload);
    });
});
