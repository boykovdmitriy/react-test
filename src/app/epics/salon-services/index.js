import {ofType} from 'redux-observable';
import {switchMap} from 'rxjs/operators'
import {SalonServices} from 'constants/salon-services';
import {rxAjax} from 'utils';

export function salonServicesRequest(action$) {
    return action$.pipe(ofType(SalonServices.SALON_SERVICES_REQUEST),
        switchMap((action) => {
            const endpoint = `http://staging.salony.com/v5/salons/${action.payload.salonId}/services`;
            return rxAjax({
                endpoint,
                method: 'GET',
            }).map(data => {
                return {
                    type: SalonServices.SALON_SERVICES_SUCCESS,
                    payload: data.response,
                };
            }).catch(error => {
                return ([{
                    type: SalonServices.SALON_SERVICES_FAILURE,
                    payload: {message: error.error, status: error.status},
                }]);
            });
        })
    );
}
