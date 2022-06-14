import {action} from 'typesafe-actions';
import {
  BusinessesActionTypes,
  FETCH_BUSINESSES_DATA_REQUEST,
  FETCH_BUSINESSES_DATA_SUCCESS,
  FETCH_BUSINESSES_DATA_ERROR,
} from './types';

export const fetchBusinessesDataRequest = (): BusinessesActionTypes =>
  action(FETCH_BUSINESSES_DATA_REQUEST);
export const fetchBusinessesDataSuccess = (data: any): BusinessesActionTypes =>
  action(FETCH_BUSINESSES_DATA_SUCCESS, data);
export const fetchBusinessesDataError = (data: any): BusinessesActionTypes =>
  action(FETCH_BUSINESSES_DATA_ERROR, data);
