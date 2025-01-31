import {
  RESET_APP_DATA,
  RESET_APP_DATA_SUCCESS,
  APP_API_ERROR,
} from './actionTypes';

import { AppActionType } from './actions';

interface initialStateType {
  
  error: any;
}

const initialState: initialStateType = {
  error: null,
};

const resultReducer = (state = initialState, action: AppActionType) => {
  switch (action.type) {
    case RESET_APP_DATA:
      state = {
        ...state,
      };
      break;

    case RESET_APP_DATA_SUCCESS:
      state = {
        ...state,
        // data: action.payload,
      };
      break;

    case APP_API_ERROR:
      state = {
        ...state,
        error: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default resultReducer;
