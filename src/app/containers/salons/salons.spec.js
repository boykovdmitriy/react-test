import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import ConnectedSalons, {Salons} from './index'
import {Salons as SalonsConstants} from "constants/salons";
import {Spinner} from 'components/spinner';
import {InfiniteScroll} from 'components/infinite-scroll';


const initialState = {
    salons: {
        list: {
            isLoading: false,
            items: [{
                id: 1,
                name: 'first',
                profile_image_urls: {thumb: 'http://s3-eu-west-1.amazonaws.com/staging-salony/image/salons/files/000/003/623/medium/nail-art-2392-250x250.jpg?1507118077'}
            }, {
                id: 2,
                name: 'second',
                profile_image_urls: {thumb: 'http://s3-eu-west-1.amazonaws.com/staging-salony/image/salons/files/000/003/623/medium/nail-art-2392-250x250.jpg?1507118077'}
            }],
            page: 2,
            total: 12
        }
    },
};
describe('Salons shallow and passing store directly', () => {
    let store, container;
    const mockStore = configureMockStore();

    beforeEach(() => {
        store = mockStore(initialState);
        container = shallow(<ConnectedSalons store={store}/>)
    });

    it('render Salons component', () => {
        const wrapper = shallow(
            <Salons/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('render connected(Salons) component', () => {
        expect(container.length).toEqual(1)
    });
});

describe('Salons mount and wrapping in Provider', () => {
    let store, wrapper;
    const mockStore = configureMockStore();

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedSalons/>
                </MemoryRouter>
            </Provider>)
    });

    it('render connected(SalonDetails) component', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('check Props matches with initialState', () => {
        store.subscribe(() => {
            expect(wrapper.find(ConnectedSalons).prop('isLoading')).toEqual(initialState.salons.list.isLoading);
            expect(wrapper.find(ConnectedSalons).prop('salons')).toEqual(initialState.salons.list.items);
            expect(wrapper.find(ConnectedSalons).prop('totalPage')).toEqual(initialState.salons.list.total);
            expect(wrapper.find(ConnectedSalons).prop('loadedUntilPage')).toEqual(initialState.salons.list.page);
        });
    });

    it('check handleScroll', () => {
        const pageSize = 25;
        const page = initialState.salons.list.page;
        const handleScroll = wrapper.find(InfiniteScroll).prop('handleScroll');
        store.subscribe(() => {
            handleScroll();
            expect(store.getActions()).toEqual([
                {type: SalonsConstants.SALONS_REQUEST, payload: {page, pageSize}},
            ]);
        });
    });

    it('check actions on dispatching', () => {
        const pageSize = 25;
        const page = initialState.salons.list.page;
        store.subscribe(() => {
            const instance = wrapper.find(ConnectedSalons).children().instance();
            const fetchSalons = wrapper.find(ConnectedSalons).prop('fetchSalons');
            fetchSalons();
            instance.loadNextPage();
            expect(store.getActions()).toEqual([
                {type: SalonsConstants.SALONS_REQUEST, payload: {page, pageSize}},
                {type: SalonsConstants.SALONS_REQUEST, payload: {page: page + 1, pageSize}},
            ]);
        });
    });
});

describe('Salons mount and wrapping in Provider for testing spinner', () => {
    let store, wrapper;
    const mockStore = configureMockStore();

    beforeEach(() => {
        store = mockStore({
            salons: {
                list: {
                    isLoading: true
                }
            }
        });
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedSalons/>
                </MemoryRouter>
            </Provider>)
    });

    it('render connected(SalonDetails) component', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('check Spinner while loading', () => {
        expect(wrapper.contains(<Spinner/>)).toEqual(true);
    });
});