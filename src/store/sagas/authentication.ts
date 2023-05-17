import { takeEvery, put } from 'redux-saga/effects';
import { loadAuthentication, logout, setAuthenticated, setAuthLoaded } from 'store/actions';
import { appConfig } from '@configs/app';
import { IAuthRememberState, initialState } from 'store/reducers/authentication';
import { Action } from 'redux-actions';

function* handleLoadAuthentication() {
  let authToken = window.localStorage.getItem(appConfig.authSecretKey);

  if (!authToken) {
    authToken = window.sessionStorage.getItem(appConfig.authSecretKey);
  }

  let payloadData = { ...initialState };

  if (authToken) {
    payloadData = JSON.parse(authToken);
  }

  yield put(setAuthenticated(payloadData));
}

function* trackSetAuthentication(action: Action<IAuthRememberState>) {
  const payloadString = JSON.stringify(action.payload);

  if (typeof action.payload?.remember === 'boolean') {
    if (action.payload.remember) {
      window.localStorage.setItem(appConfig.authSecretKey, payloadString);
    } else {
      window.sessionStorage.setItem(appConfig.authSecretKey, payloadString);
    }
  }

  yield put(setAuthLoaded(true));
}

function* trackLogout() {
  window.localStorage.removeItem(appConfig.authSecretKey);
  window.sessionStorage.removeItem(appConfig.authSecretKey);
}

export default function* watchAuthentication() {
  yield takeEvery(loadAuthentication.toString(), handleLoadAuthentication);
  yield takeEvery(setAuthenticated.toString(), trackSetAuthentication);
  yield takeEvery(logout.toString(), trackLogout);
}
