import {combineReducers} from 'redux';
import {businessSearchReducer} from './businesses/reducers';
import {BusinessesState} from './businesses/types';

export interface ApplicationMainState {
  readonly businesses: BusinessesState
}

export default combineReducers({
  businesses: businessSearchReducer
});
