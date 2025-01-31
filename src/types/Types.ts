import { IAppDispatch } from '../store';
import { RootState as IRootState } from '../store/reducers';

export type RootState = IRootState;
export type AppDispatch = IAppDispatch;

// REDUX
export interface Action {
  type: string;
  payload?: any;
}

export interface PayloadType<D = any, P = any> {
  data?: D;
  callback?: (cb: any) => void;
  _id?: string;
  params?: P;
}

export interface SagaPayloadType {
  payload: PayloadType;
  type: string;
}
