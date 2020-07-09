import {combineReducers} from 'redux';
import {businessSearchReducer} from './businesses/reducers';
import {BusinessesState} from './businesses/types';

export interface DefaultState {
  readonly data: object;
  readonly loading: boolean;
  readonly error?: boolean;
}

export interface ApplicationMainState {
  readonly businesses: BusinessesState
}

const rootReducer = () =>
  combineReducers({
    businesses: businessSearchReducer
  });

export default rootReducer;
