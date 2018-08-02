import { AuthActionTypes, AuthActions } from './auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
}

export const initialState: AuthState = {
    isAuthenticated: false
};

export function authReducer (
    state: AuthState = initialState,
    action: AuthActions
): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return { ...state, isAuthenticated: true };

        case AuthActionTypes.LOGOUT:
            return { ...state, isAuthenticated: false };
        
        default:
            return state;
    }
}