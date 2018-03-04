import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ConnectedSalonDetails, {SalonDetails} from './index'
import {SalonServices} from "constants/salon-services";
import {Salons} from "constants/salons";

const initialState = {
    salons: {
        item: {
            isLoading: false,
            salon: {
                id: 12,
                name: 'TestName',
                description: 'TestDescription',
                hours: {
                    fri: {to: "20:00", from: "07:00"},
                    mon: {to: "20:00", from: "07:00"},
                },
                images: [
                    {
                        id: 1,
                        image_urls: {
                            medium: 'http://s3-eu-west-1.amazonaws.com/staging-salony/image/salons/files/000/003/623/medium/nail-art-2392-250x250.jpg?1507118077'
                        }
                    }
                ]
            }
        }
    },
    salonServices: {
        isLoading: false,
        services: [{
            id: 1,
            name: 'service1',
            duration: 15,
            price: 100
        }, {
            id: 2,
            name: 'service2',
            duration: 16,
            price: 101
        },]
    }
};
const salonId = 1;
describe('SalonDetails shallow and passing store directly', () => {
    let store, container;
    const mockStore = configureMockStore();

    beforeEach(() => {
        store = mockStore(initialState);
        container = shallow(<ConnectedSalonDetails store={store} match={{params: {}}}/>)
    });

    it('render SalonDetails component', () => {
        const wrapper = shallow(
            <SalonDetails match={{params: {}}}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('render connected(SalonDetails) component', () => {
        expect(container.length).toEqual(1)
    });
});

describe('SalonDetails mount and wrapping in Provider', () => {
    let store, wrapper;
    const mockStore = configureMockStore();

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><ConnectedSalonDetails match={{params: {salonId}}}/></Provider>)
    });

    it('render connected(SalonDetails) component', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('check Props matches with initialState', () => {
        store.subscribe(() => {
            expect(wrapper.find(ConnectedSalonDetails).prop('isLoadingSalon')).toEqual(initialState.salons.item.isLoading);
            expect(wrapper.find(ConnectedSalonDetails).prop('isLoadingServices')).toEqual(initialState.salonServices.isLoading);
            expect(wrapper.find(ConnectedSalonDetails).prop('salon')).toEqual(initialState.salons.item);
            expect(wrapper.find(ConnectedSalonDetails).prop('services')).toEqual(initialState.salonServices.services);

        });
    });

    it('check actions on dispatching', () => {
        expect(store.getActions()).toEqual([
            {type: Salons.SALON_REQUEST, payload: { salonId}},
            {type: SalonServices.SALON_SERVICES_REQUEST, payload: {salonId}},
        ]);
    });
});