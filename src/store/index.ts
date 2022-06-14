import {combineReducers} from 'redux';
import {businessesReducer} from './businesses/reducers';
import {BusinessesState} from './businesses/types';
import {businessDetailReducer} from './businessDetail/reducers';
import {BusinessDetailState} from './businessDetail/types';

export interface ApplicationMainState {
  readonly businesses: BusinessesState;
  readonly businessDetail: BusinessDetailState;
}

export default combineReducers({
  businesses: businessesReducer,
  businessDetail: businessDetailReducer,
});
