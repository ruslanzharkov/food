export const FETCH_BUSINESSES_DATA_REQUEST = 'FETCH_BUSINESSES_DATA_REQUEST';
export const FETCH_BUSINESSES_DATA_SUCCESS = 'FETCH_BUSINESSES_DATA_SUCCESS';
export const FETCH_BUSINESSES_DATA_ERROR = 'FETCH_BUSINESSES_DATA_ERROR';

export interface BusinessesState {
  readonly data: Business[];
  readonly loading: boolean;
  readonly error?: Error;
}

export interface Error {
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
  distance: number
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

export type BusinessesActionTypes =
  FetchBusinessesDataRequestedAction |
  FetchBusinessesDataSuccessAction |
  FetchBusinessesDataError;
