import Log from '@/helpers/Log';
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

import { PayloadType } from '@/types/Types';

export const sendOtp = (
  data: PayloadType<{ phone?: string } | { email?: string }>
) => {
  return {
    type: SEND_OTP,
    payload: data,
  };
};
export const sendOtpSuccess = (data: PayloadType) => {
  return {
    type: SEND_OTP_SUCCESS,
    payload: data,
  };
};
export const login = (
  data: PayloadType<{ phone?: string; email?: string; password: string }>
) => {
  return {
    type: LOGIN,
    payload: data,
  };
};
export const loginSuccess = (data: PayloadType) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const refreshToken = (data: PayloadType) => {
  return {
    type: REFRESH_TOKEN,
    payload: data,
  };
};
export const refreshTokenSuccess = (data: string) => {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload: { accessToken: data },
  };
};

// LOGOUT
export const logout = (data: PayloadType) => {
  return {
    type: LOGOUT,
    payload: data,
  };
};
export const logoutSuccess = (data: PayloadType) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: data,
  };
};

export const authError = (error: any) => {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};

// TYPESCRIPT ACTION TYPES
export type AuthActionType =
  | { type: typeof SEND_OTP; payload: PayloadType }
  | { type: typeof SEND_OTP_SUCCESS; payload: PayloadType }
  | { type: typeof LOGIN; payload: PayloadType }
  | {
      type: typeof LOGIN_SUCCESS;
      payload: {
        accessToken?: string; // only when added organisation
        message?: string;
        teacherId: string;
        organisationId?: string; // only when added organisation
      };
    }
  | { type: typeof REFRESH_TOKEN; payload: PayloadType }
  | { type: typeof REFRESH_TOKEN_SUCCESS; payload: any }
  | { type: typeof LOGOUT; payload: PayloadType }
  | { type: typeof LOGOUT_SUCCESS; payload: PayloadType }
  | { type: typeof AUTH_ERROR; payload: PayloadType };
