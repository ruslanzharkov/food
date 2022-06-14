export const FETCH_BUSINESSES_DATA_REQUEST = 'FETCH_BUSINESSES_DATA_REQUEST';
export const FETCH_BUSINESSES_DATA_SUCCESS = 'FETCH_BUSINESSES_DATA_SUCCESS';
export const FETCH_BUSINESSES_DATA_ERROR = 'FETCH_BUSINESSES_DATA_ERROR';

interface FetchBusinessesDataRequestedAction {
  type: typeof FETCH_BUSINESSES_DATA_REQUEST;
}

interface FetchBusinessesDataSuccessAction {
  type: typeof FETCH_BUSINESSES_DATA_SUCCESS;
  payload: any;
}

interface FetchBusinessesDataErrorAction {
  type: typeof FETCH_BUSINESSES_DATA_ERROR;
  payload: any;
}

export type BusinessesActionTypes =
  | FetchBusinessesDataRequestedAction
  | FetchBusinessesDataSuccessAction
  | FetchBusinessesDataErrorAction;

export interface BusinessesState {
  readonly data: Business[];
  readonly loading: boolean;
  readonly error?: BusinessError;
}

export interface BusinessError {
  message: string;
}

export interface BusinessCategories {
  alias: string;
  title: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Business {
  rating: number;
  price: string;
  phone: string;
  id: string;
  alias: string;
  is_closed: boolean;
  categories: BusinessCategories[];
  review_count: number;
  name: string;
  url: string;
  coordinates: Coordinates;
  image_url: string;
  location: Location;
  distance: number;
  transactions: string[];
}

export interface Location {
  city: string;
  country: string;
  address1: string;
  address2: string;
  address3: string;
  state: string;
  zip_code: string;
}
