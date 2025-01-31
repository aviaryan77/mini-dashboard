import { put, takeEvery, all, fork, call } from 'redux-saga/effects';
import { RESET_APP_DATA } from './actionTypes';

import { resetAppDataSuccess, appApiError } from './actions';
import { SagaPayloadType } from '@/types/Types';

// STORE_TEST_SECTIONS
function* resetAppData({
  payload: { data, callback = () => {} },
}: SagaPayloadType): Generator<any, void, any> {
  try {
    yield put(resetAppDataSuccess(data));
    callback(data);
  } catch (error: any) {
    yield put(appApiError(error));
  }
}

export function* watchApp() {
  yield takeEvery(RESET_APP_DATA, resetAppData);
}

export default function* resultsSaga() {
  yield all([fork(watchApp)]);
}
