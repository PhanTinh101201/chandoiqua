import { createAction } from 'redux-actions';
import { IAuthRememberState } from 'store/reducers/authentication';

export const setAuthenticated = createAction<Partial<IAuthRememberState>>('AUTHENTICATION_AUTHENTICATED');
export const logout = createAction('AUTHENTICATION_LOGOUT');
export const loadAuthentication = createAction('AUTHENTICATION_LOAD');
