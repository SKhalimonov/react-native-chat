import { methods } from '../config/constants/http';

export class HttpService {
    get(url) {
        return fetch(url, createRequest(methods.GET))
            .then(response => response.json());
    }

    post(url, body) {
        return fetch(url, createRequest(methods.POST, body))
            .then(response => response.json());
    }
}

function createRequest(type, body, params) {
    if (type === methods.GET) {
        return {
            method: methods.GET,
            headers: createDefaultHeaders()
        };
    }
    if (type === methods.POST) {
        return {
            method: methods.POST,
            headers: createDefaultHeaders(),
            body: JSON.stringify(body)
        };
    }
}

function createDefaultHeaders() {
    var headers = new Headers();
    headers.append('Accepts', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
}