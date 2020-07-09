export const FETCH_BUSINESSES_DATA_REQUEST = 'FETCH_BUSINESSES_DATA_REQUEST';
export const FETCH_BUSINESSES_DATA_SUCCESS = 'FETCH_BUSINESSES_DATA_SUCCESS';
export const FETCH_BUSINESSES_DATA_ERROR = 'FETCH_BUSINESSES_DATA_ERROR';

export interface BusinessesState {
  readonly data: any;
  readonly loading: boolean;
  readonly error?: boolean;
}

interface FetchBusinessesDataRequestedAction {
  type: typeof FETCH_BUSINESSES_DATA_REQUEST;
}

interface FetchBusinessesDataSuccessAction {
  type: typeof FETCH_BUSINESSES_DATA_SUCCESS;
  payload: any;
}

interface FetchBusinessesDataSuccessError {
  type: typeof FETCH_BUSINESSES_DATA_ERROR;
  payload: object;
}

export type BusinessesActionTypes = FetchBusinessesDataRequestedAction | FetchBusinessesDataSuccessAction | FetchBusinessesDataSuccessError;
