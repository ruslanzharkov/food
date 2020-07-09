export const FETCH_BUSINESSES_DATA_REQUEST = 'FETCH_BUSINESSES_DATA_REQUEST';
export const FETCH_BUSINESSES_DATA_SUCCESS = 'FETCH_BUSINESSES_DATA_SUCCESS';
export const FETCH_BUSINESSES_DATA_ERROR = 'FETCH_BUSINESSES_DATA_ERROR';

export interface BusinessesState {
  readonly data: any;
  readonly loading: boolean;
  readonly error?: any;
}

interface FetchBusinessesDataRequestedAction {
  type: typeof FETCH_BUSINESSES_DATA_REQUEST;
}

interface FetchBusinessesDataSuccessAction {
  type: typeof FETCH_BUSINESSES_DATA_SUCCESS;
  payload: any;
}

interface FetchBusinessesDataError {
  type: typeof FETCH_BUSINESSES_DATA_ERROR;
  payload: any;
}

export type BusinessesActionTypes = FetchBusinessesDataRequestedAction | FetchBusinessesDataSuccessAction | FetchBusinessesDataError;
