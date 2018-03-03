import {ofType} from 'redux-observable';
import {switchMap} from 'rxjs/operators'
import {SalonServices} from 'constants/salon-services';
import {rxAjax} from 'utils';

export function salonServicesRequest(action$) {
    return action$.pipe(ofType(SalonServices.SALON_SERVICES_REQUEST),
        switchMap((action) => {
            const endpoint = `http://staging.salony.com/salons/${action.payload.salonId}/services`;
            const request = rxAjax({
                endpoint,
                method: 'GET',
            }).map(data => {
                console.log(data);
                return {
                    type: SalonServices.SALON_SERVICES_SUCCESS,
                    payload: data,
                };
            }).catch(error => {
                console.log(error);
                return ([{
                    type: SalonServices.SALON_SERVICES_FAILURE,
                    payload: {message: error.error, status: error.status},
                }]);
            });
            request.subscribe((x) => console.log(x));
            return request;
        })
    );
}
