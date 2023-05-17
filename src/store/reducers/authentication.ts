import { Role } from 'common/types/role';
import { handleActions, Action } from 'redux-actions';

import * as actions from 'store/actions';

export interface IAuthState {
  token: string;
  key: string;
  fullName: string;
  email: string;
  role: Role;
}

export interface IAuthRememberState extends IAuthState {
  remember: boolean;
}

export const initialState: IAuthState = {
  token: '',
  key: '',
  fullName: '',
  email: '',
  role: Role.General,
};

export default handleActions<IAuthState>(
  {
    [actions.setAuthenticated.toString()]: (state = initialState, action: Action<IAuthState>) => ({
      ...state,
      ...action.payload,
    }),
    [actions.logout.toString()]: () => ({ ...initialState }),
  },
  initialState
);
