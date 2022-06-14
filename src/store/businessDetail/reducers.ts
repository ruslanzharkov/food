import {Reducer} from 'redux';
import {
  BusinessDetail,
  BusinessDetailState,
  FETCH_BUSINESS_DETAIL_ERROR,
  FETCH_BUSINESS_DETAIL_REQUEST,
  FETCH_BUSINESS_DETAIL_SUCCESS,
} from './types';
import {BusinessError} from '../businesses/types';

// type-safe initial state
export const initialState: BusinessDetailState = {
  data: {} as BusinessDetail,
  loading: false,
  error: {} as BusinessError,
};

export const businessDetailReducer: Reducer<BusinessDetailState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_BUSINESS_DETAIL_REQUEST: {
      return {...state, loading: true};
    }
    case FETCH_BUSINESS_DETAIL_SUCCESS: {
      return {...state, loading: false, data: action.payload};
    }
    case FETCH_BUSINESS_DETAIL_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
};
