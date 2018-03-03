import {ofType} from 'redux-observable';
import {switchMap} from 'rxjs/operators'

import {Salons} from 'constants/salons';
import {rxAjax} from 'utils';

export function salonsRequest(action$) {
    return action$.pipe(
        ofType(Salons.SALONS_REQUEST),
        switchMap((action) => {
            const endpoint = `http://staging.salony.com/v5/salons?per_page=${action.payload.pageSize}&page=${action.payload.page}`;

            return rxAjax({
                endpoint,
                method: 'GET',
            })
                .map(data => {
                    return {
                        type: Salons.SALONS_SUCCESS,
                        payload: data,
                    };
                })
                .catch(error => {
                    return ([{
                        type: Salons.SALONS_FAILURE,
                        payload: {message: error.error, status: error.status},
                    }]);
                });
        })
    );
}

export function salonRequest(action$) {
    return action$.pipe(
        ofType(Salons.SALON_REQUEST),
        switchMap((action) => {
            const endpoint = `http://staging.salony.com//v5/salons/${action.payload.salonId}`;

            return rxAjax({
                endpoint,
                method: 'GET',
            })
                .map(data => {
                    return {
                        type: Salons.SALON_SUCCESS,
                        payload: data,
                    };
                })
                .catch(error => {
                    return ([{
                        type: Salons.SALON_FAILURE,
                        payload: {message: error.error, status: error.status},
                    }]);
                });
        })
    );
}
