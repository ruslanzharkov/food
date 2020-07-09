import {connect} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import {Action, bindActionCreators, Dispatch} from 'redux';

import {ApplicationMainState} from '../../store';
import {BusinessesState} from '../../store/businesses/types';
import {thunkGetBusinessesData} from '../../store/businesses/thunks';
import SearchScreen from './SearchScreen';

type StateToProps = {
  businesses: BusinessesState;
}

type DispatchToProps = {
  thunkGetBusinessesData(term: string): ThunkAction<void, ApplicationMainState, null, Action<string>>
}

const mapStateToProps = (state: ApplicationMainState): StateToProps => ({
  businesses: state.businesses
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({
    thunkGetBusinessesData: thunkGetBusinessesData,
  },
    dispatch
  ) ;

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapDispatchToProps, mapDispatchToProps)(SearchScreen)