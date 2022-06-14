import {action} from 'typesafe-actions';
import {
  BusinessDetailActionTypes,
  FETCH_BUSINESS_DETAIL_ERROR,
  FETCH_BUSINESS_DETAIL_REQUEST,
  FETCH_BUSINESS_DETAIL_SUCCESS,
} from './types';

export const fetchBusinessDetailRequest = (): BusinessDetailActionTypes =>
  action(FETCH_BUSINESS_DETAIL_REQUEST);
export const fetchBusinessDetailSuccess = (
  data: any,
): BusinessDetailActionTypes => action(FETCH_BUSINESS_DETAIL_SUCCESS, data);
export const fetchBusinessDetailError = (
  data: any,
): BusinessDetailActionTypes => action(FETCH_BUSINESS_DETAIL_ERROR, data);
