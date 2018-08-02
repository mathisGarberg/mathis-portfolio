import { Action } from "@ngrx/store";

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGOUT = '[Auth] Logout'
}

export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN;
}

export class Logout implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = Login | Logout;