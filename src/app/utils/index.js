import {Observable} from 'rxjs';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';
import 'rxjs/add/observable/dom/ajax';

export function rxAjax(action) {
    const errors = [];
    const settings = {};

    if (!action.method) {
        action.method = 'GET';
    }

    if (!action.endpoint) {
        errors.push('endpoint');
    }

    if (!action.payload && (action.method !== 'GET' && action.method !== 'DELETE')) {
        errors.push('payload');
    }

    if (errors.length) {
        throw new Error(`Error! You must pass \`${errors.join('`, `')}\``);
    }

    settings.url = action.endpoint;
    settings.method = action.method;
    settings.crossDomain = true;
    settings.createXHR = () => new window.XMLHttpRequest();
    settings.headers = {
        'Content-Type': 'application/json',
    };

    if (action.method !== 'GET') {
        settings.body = action.payload;
    }
    return Observable.ajax(settings);
}