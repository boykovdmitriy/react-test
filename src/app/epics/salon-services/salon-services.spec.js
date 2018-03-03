import nock from 'nock';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware} from 'redux-observable';
import {salonServicesRequest} from "./index";
import * as actions from "actions/salon-services/index";
import {SalonServices} from "constants/salon-services";

const epicMiddleware = createEpicMiddleware(salonServicesRequest);
const mockStore = configureMockStore([epicMiddleware]);

describe('salonServicesRequest', () => {
    let store;

    beforeEach(() => {
        store = mockStore();
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('produces services of the salon', () => {
        const payload = {services: [{id: 1}, {id: 2}]};
        const salonId = 123;
        nock('http://staging.salony.com').get(`/salons/${salonId}/services`)
            .reply(200, payload);

        store.dispatch(actions.salonServicesRequest(salonId));
        store.subscribe(x => {
                expect(store.getActions()).toEqual([
                    {type: SalonServices.SALON_SERVICES_REQUEST, payload: {salonId}},
                    {type: SalonServices.SALON_SERVICES_SUCCESS, payload}
                ]);
            }
        );
    });
});