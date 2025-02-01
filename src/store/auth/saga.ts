// Auth Redux States
import { takeEvery, fork, put, all, call, select } from 'redux-saga/effects';
import { SEND_OTP, LOGIN, REFRESH_TOKEN, 
    //PROFILE
    GET_PROFILE,
    UPDATE_PROFILE,

  
  LOGOUT } from './actionTypes';

import {
  sendOtpSuccess,
  loginSuccess,
  refreshTokenSuccess,
  getProfileSuccess,
  updateProfileSuccess,
  logoutSuccess,
  authError,
} from './actions';

import {
  sendOtpApi,
  loginApi,
  refreshTokenApi,

  updateProfileApi,
} from '@/helpers/Api';

import { SagaPayloadType } from '@/types/Types';
import { toast } from '@/helpers/Toast';

import store from '@/store';





// SEND_OTP
function* sendOtp({
  payload: { data, callback = () => {} },
}: SagaPayloadType): Generator<any, void, any> {
  try {
    const response = yield call(sendOtpApi, { data });
    if (response?.status === 200) {
      // yield put(sendOtpSuccess(response?.data));
      callback(response?.data);
      toast({
        title: 'Success',
        status: 'success',
        description: 'Otp Sent Successfully',
      });
    } else if (
      response?.status === 400 &&
      response?.data?.error === 'Student, please login through a mobile device.'
    ) {
      toast({
        title: 'Error',
        status: 'error',
        description: response?.data?.error,
      });
      if (callback) callback(response?.data?.error);
      yield put(authError(`error with status code : ${response.status}`));
    } else {
      toast({
        title: 'Error',
        status: 'error',
        description: response?.data?.error,
      });
      yield put(authError(`error with status code : ${response.status}`));
    }
  } catch (error) {
    yield put(authError(error));
  }
}

// LOGIN
function* login({
  payload: { data, callback = () => {} },
}: SagaPayloadType): Generator<any, void, any> {
  try {
    const response = yield call(loginApi, { data });
    if (response?.status === 200 || response?.status === 201) {
      yield put(loginSuccess(response?.data));
      callback(response?.data);
      toast({
        title: 'Success',
        description: 'Login Successful',
        status: 'success',
      });
    } else {
      console.log('error in verify otp', response?.data);
      toast({
        title: 'Error',
        description: response?.data?.error,
        status: 'error',
      });
      yield put(authError(`error with status code : ${response.status}`));
    }
  } catch (error) {
    yield put(authError(error));
    console.log('error in verify otp', error);
    toast({
      title: 'Error',
      description: 'Something went wrong',
      status: 'error',
    });
  }
}

// REFRESH_TOKEN
function* refreshToken({
  payload: { data, callback = () => {} },
}: SagaPayloadType): Generator<any, void, any> {
  try {
    const response = yield call(refreshTokenApi, { data });
    if (response?.status === 200) {
      yield put(refreshTokenSuccess(response?.data));
      callback(response?.data);
    } else {
      yield put(authError(`error with status code : ${response.status}`));
    }
  } catch (error) {
    yield put(authError(error));
  }
}

// PROFILE
function* getProfile({
  payload: { data, callback = () => {} },
}: SagaPayloadType): Generator<any, void, any> {
  try {
    const state = store.getState();

      yield put(getProfileSuccess( state.auth.user));
      callback( state.auth.user);
    
  } catch (error) {
    yield put(authError(error));
  }
}

function* updateProfile({
  payload: { data, callback = () => {} },
}: SagaPayloadType): Generator<any, void, any> {
  try {
    const response = yield call(updateProfileApi, { data });
    if (response?.status === 200) {
      yield put(updateProfileSuccess(response?.data));
      callback(response?.data);
      toast({
        title: 'Success',
        description: 'Profile Updated Successfully',
        status: 'success',
      });
    } else {
      yield put(authError(`error with status code : ${response.status}`));
    }
  } catch (error) {
    yield put(authError(error));
  }
}



// LOGOUT
function* logout({
  payload: { callback = () => {} },
}: SagaPayloadType): Generator<any, void, any> {
  try {
    // const response = yield call(logoutApi);
    if (true) {
      yield put(logoutSuccess({}));
      if (callback) callback('success');
    }
  } catch (error) {
    console.log('error', error);
    yield put(authError(error));
  }
}

export function* watchAuth() {
  yield takeEvery(SEND_OTP, sendOtp);
  yield takeEvery(LOGIN, login);
  yield takeEvery(REFRESH_TOKEN, refreshToken);
  yield takeEvery(GET_PROFILE, getProfile);
  yield takeEvery(UPDATE_PROFILE, updateProfile);
  yield takeEvery(LOGOUT, logout);
}

export default function* authSaga() {
  yield all([fork(watchAuth)]);
}
