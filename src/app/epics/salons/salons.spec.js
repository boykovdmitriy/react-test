import nock from 'nock';
import expect from 'expect';
import {combineEpics} from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware} from 'redux-observable';
import {salonsRequest, salonRequest} from "./index";
import * as actions from "actions/salons/index";
import {Salons} from "constants/salons";

const epics = combineEpics(salonsRequest, salonRequest);
const epicMiddleware = createEpicMiddleware(epics);
const mockStore = configureMockStore([epicMiddleware]);

describe('salons epics', () => {
    let store;

    beforeEach(() => {
        store = mockStore();
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('produces salons success', () => {
        const payload = {salons: [{id: 1}, {id: 2}], total: 100};
        const config = {page: 1, pageSize: 25};
        nock('http://staging.salony.com').get(`/v5/salons?per_page=${config.pageSize}&page=${config.page}`)
            .reply(200, payload);

        store.dispatch(actions.salonsRequest(config.page, config.pageSize));
        store.subscribe(() => {
                expect(store.getActions()).toEqual([
                    {type: Salons.SALONS_REQUEST, payload: config},
                    {type: Salons.SALONS_SUCCESS, payload}
                ]);
            }
        );
    });
    it('produces salons failure', () => {
        const payload = {status: 404, error: 'error'};
        const config = {page: 1, pageSize: 25};
        nock('http://staging.salony.com').get(`/v5/salons?per_page=${config.pageSize}&page=${config.page}`)
            .reply(404, payload);

        store.dispatch(actions.salonsRequest(config.page, config.pageSize));
        store.subscribe(() => {
                console.log(payload);
                expect(store.getActions()).toEqual([
                    {type: Salons.SALONS_REQUEST, payload: config},
                    {type: Salons.SALONS_FAILURE, payload}
                ]);
            }
        );
    });
    it('produces salon success', () => {
        const payload = {id: 10};
        const config = {salonId: 10};
        nock('http://staging.salony.com').get(`http://staging.salony.com/v5/salons/${config.salonId}`)
            .reply(200, payload);

        store.dispatch(actions.salonRequest(config.salonId));
        store.subscribe(() => {
                console.log(payload);
                expect(store.getActions()).toEqual([
                    {type: Salons.SALON_REQUEST, payload: config},
                    {type: Salons.SALON_SUCCESS, payload}
                ]);
            }
        );
    });
    it('produces salon failure', () => {
        const payload = {status: 404, error: 'error'};
        const config = {salonId: 10};
        nock('http://staging.salony.com').get(`http://staging.salony.com/v5/salons/${config.salonId}`)
            .reply(404, payload);

        store.dispatch(actions.salonRequest(config.salonId));
        store.subscribe(() => {
                console.log(payload);
                expect(store.getActions()).toEqual([
                    {type: Salons.SALON_REQUEST, payload: config},
                    {type: Salons.SALON_FAILURE, payload}
                ]);
            }
        );
    });
});