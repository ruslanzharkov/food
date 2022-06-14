import {Reducer} from 'redux';
import {
  FETCH_BUSINESSES_DATA_REQUEST,
  FETCH_BUSINESSES_DATA_SUCCESS,
  FETCH_BUSINESSES_DATA_ERROR,
  BusinessesState,
  Business,
  BusinessError,
} from './types';

// type-safe initial state
export const initialState: BusinessesState = {
  data: [] as Business[],
  loading: false,
  error: {} as BusinessError,
};

export const businessesReducer: Reducer<BusinessesState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_BUSINESSES_DATA_REQUEST: {
      return {...state, loading: true};
    }
    case FETCH_BUSINESSES_DATA_SUCCESS: {
      return {...state, loading: false, data: action.payload};
    }
    case FETCH_BUSINESSES_DATA_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
};
