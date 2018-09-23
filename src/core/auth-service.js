import { HttpService } from './http-service';
import { environment } from '../config/environment';

export class AuthService {
    constructor() {
        this.http = new HttpService();
    }

    login(credentials) {
        return this.requestToken(credentials).pipe(
            mergeMap(
                token => this.getUserProfile(token.token),
                (token, user) => ({ token, user })),
            tap(data => this.createSession(data.token, data.user)),
            map(data => data.token)
        );
    }
}

function requestToken(credentials) {
    return this.http.post(`${environment.baseUrl}/api/auth/authenticate`, credentials)
        .map(r => r.json())
        .map(json => new OAuthToken(
            json.access_token,
            json.refresh_token,
            json.expires_in))
        .catch(err => this.handleOAuthError(err, 'Can\'t acquire the access token.'));
}