import {combineEpics} from 'redux-observable';
import {salonServicesRequest} from "./salon-services";
import {salonRequest, salonsRequest} from "./salons";

export default combineEpics(
    salonsRequest,
    salonRequest,
    salonServicesRequest
);