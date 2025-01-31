import {
  SEND_OTP,
  SEND_OTP_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,

  // LOGOUT
  LOGOUT,
  LOGOUT_SUCCESS,
  AUTH_ERROR,
} from './actionTypes';
import { AuthActionType } from './actions';

interface AuthState {
  // Define your state properties here
  accessToken?: string;
  logoutLoading: boolean;
  loginLoading: boolean;
  refreshToken?: string | null;
  refreshTokenLoading: boolean;
  sendOtpLoading: boolean;
  user ?: any;
  error: any;
}

const initialState: AuthState = {
  // Define your initial state here
  accessToken: '',
  refreshToken: null,
  loginLoading: false,
  refreshTokenLoading: false,
  user: null,
  sendOtpLoading: false,
  logoutLoading: false,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case SEND_OTP:
      state = {
        ...state,
        sendOtpLoading: true,
      };
      break;

    case SEND_OTP_SUCCESS:
      state = {
        ...state,
        sendOtpLoading: false,
      };
      break;

    case LOGIN:
      state = {
        ...state,
        loginLoading: true,
      };
      break;

    case LOGIN_SUCCESS:
      state = {
        ...state,
        loginLoading: false,
        accessToken: action.payload?.accessToken,
        };
      break;

    case REFRESH_TOKEN:
      state = {
        ...state,
        refreshTokenLoading: true,
      };
      break;

    case REFRESH_TOKEN_SUCCESS:
      state = {
        ...state,
        refreshTokenLoading: false,
        accessToken: action.payload.accessToken,
      };
      break;

  

    // LOGOUT
    case LOGOUT:
      state = {
        ...state,
        logoutLoading: true,
      };
      break;

    case LOGOUT_SUCCESS:
      state = {
        ...state,
        accessToken: '',
        refreshToken: null,
        refreshTokenLoading: false,
        user: null,
        logoutLoading: false,
        error: null,
      };
      break;

    case AUTH_ERROR:
      state = {
        ...state,
        refreshTokenLoading: false,
        sendOtpLoading: false,
        loginLoading: false,
        logoutLoading: false,
        error: action?.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default authReducer;
