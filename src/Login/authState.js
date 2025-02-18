export class AuthState {
    static Unknown = new AuthState('unknown'); //State if authorization state is not known
    static Authenticated = new AuthState('authenticated');
    static Unauthenticated = new AuthState('unauthenticated');

    constructor(name) {
        this.name = name;
    }
}