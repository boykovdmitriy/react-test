import expect from 'expect';

import {reducer, initialState} from './index';
import {Salons} from "constants/salons";
import mocks from './mock';

describe('salons reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should handle Salons.SALONS_REQUEST', () => {
        const action = {
            type: Salons.SALONS_REQUEST
        };
        expect(reducer(undefined, action).list.isLoading).toEqual(true);
    });
    it('should handle Salons.SALONS_SUCCESS', () => {
        const action = {
            type: Salons.SALONS_SUCCESS,
            payload: mocks.salonsSuccess
        };
        expect(reducer(undefined, action).list).toEqual({
            isLoading: false,
            items: mocks.salonsSuccess.salons,
            total: mocks.salonsSuccess.total
        });
    });
    it('should handle Salons.SALONS_FAILURE', () => {
        const action = {
            type: Salons.SALONS_FAILURE,
            payload: "error"
        };
        expect(reducer(undefined, action).list.error).toEqual(action.payload);
    });
    it('should handle Salons.SALON_REQUEST', () => {
        const action = {
            type: Salons.SALON_REQUEST
        };
        expect(reducer(undefined, action).item.isLoading).toEqual(true);
    });
    it('should handle Salons.SALON_SUCCESS', () => {
        const action = {
            type: Salons.SALON_SUCCESS,
            payload: mocks.salon
        };
        expect(reducer(undefined, action).item).toEqual({
            isLoading: false,
            ...mocks.salon
        });
    });
    it('should handle Salons.SALON_FAILURE', () => {
        const action = {
            type: Salons.SALON_FAILURE,
            payload: "error"
        };
        expect(reducer(undefined, action).item.error).toEqual(action.payload);
    });
});
