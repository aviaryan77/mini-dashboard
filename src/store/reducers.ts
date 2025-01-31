import { combineReducers, UnknownAction } from '@reduxjs/toolkit';

import app from './app/reducer';
import auth from './auth/reducer';

// COMBINE AND EXPOSE THE REDUCERS AVAILABLE IN THE APP
const appReducer = combineReducers({
  app: app,
  auth: auth,
});

export function clearStore(): UnknownAction {
  return {
    type: 'CLEAR_STORE',
  };
}

const rootReducer = (state: any, action: any) => {
  if (action.type === 'CLEAR_STORE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
