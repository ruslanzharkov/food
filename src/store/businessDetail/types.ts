import {Business, BusinessError, Location} from '../businesses/types';

export const FETCH_BUSINESS_DETAIL_REQUEST = 'FETCH_BUSINESS_DETAIL_REQUEST';
export const FETCH_BUSINESS_DETAIL_SUCCESS = 'FETCH_BUSINESS_DETAIL_SUCCESS';
export const FETCH_BUSINESS_DETAIL_ERROR = 'FETCH_BUSINESS_DETAIL_ERROR';

interface FetchBusinessDetailRequestAction {
  type: typeof FETCH_BUSINESS_DETAIL_REQUEST;
}

interface FetchBusinessDetailSuccessAction {
  type: typeof FETCH_BUSINESS_DETAIL_SUCCESS;
  payload: any;
}

interface FetchBusinessDetailErrorAction {
  type: typeof FETCH_BUSINESS_DETAIL_ERROR;
  payload: any;
}

export type BusinessDetailActionTypes =
  | FetchBusinessDetailRequestAction
  | FetchBusinessDetailSuccessAction
  | FetchBusinessDetailErrorAction;

export interface BusinessDetailState {
  readonly data: BusinessDetail;
  readonly loading: boolean;
  readonly error?: BusinessError;
}

export interface BusinessDetail extends Business {
  is_claimed: boolean;
  display_phone: string;
  location: BusinessDetailLocation;
  photos: string[];
  hours: BusinessHour[];
  transactions: any[];
  special_hours: SpecialBusinessHour[];
}

export interface BusinessDetailLocation extends Location {
  cross_streets: string;
  display_address: string[];
}

export interface BusinessHour {
  open: {
    is_overnight: boolean;
    start: string;
    end: string;
    day: number;
  };
  hours_type: string;
  is_open_now: boolean;
}

export interface SpecialBusinessHour {
  is_overnight: boolean;
  start: string;
  end: string;
  date: string;
  is_closed: null | boolean;
}
