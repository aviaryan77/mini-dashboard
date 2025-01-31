import {
  RESET_APP_DATA,
  RESET_APP_DATA_SUCCESS,
  APP_API_ERROR,
} from './actionTypes';

import { PayloadType } from '@/types/Types';

export const resetAppData = (data: PayloadType) => ({
  type: RESET_APP_DATA,
  payload: data,
});

export const resetAppDataSuccess = (data: any) => ({
  type: RESET_APP_DATA_SUCCESS,
  payload: data,
});

export const appApiError = (error: PayloadType) => ({
  type: APP_API_ERROR,
  payload: error,
});

// TYPESCRIPT ACTION TYPES
export type AppActionType =
  | { type: typeof RESET_APP_DATA; payload: PayloadType }
  | {
      type: typeof RESET_APP_DATA_SUCCESS;
      payload: any;
    }
  | { type: typeof APP_API_ERROR; payload: any };
