import {connect} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import {Action, bindActionCreators, Dispatch} from 'redux';
import {StackScreenProps} from '@react-navigation/stack';

import {ApplicationMainState} from '../../store';
import {BusinessesState} from '../../store/businesses/types';
import {thunkGetBusinessesData} from '../../store/businesses/thunks';
import {
  RootStackParamList,
  StackNavigationScreens,
} from '../../navigation/types';
import BusinessesScreen from './BusinessesScreen';

type StateToProps = {
  businesses: BusinessesState;
};

type DispatchToProps = {
  thunkGetBusinessesData(
    term: string,
  ): ThunkAction<void, ApplicationMainState, null, Action<string>>;
};

const mapStateToProps = (state: ApplicationMainState): StateToProps => ({
  businesses: state.businesses,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators(
    {
      thunkGetBusinessesData: thunkGetBusinessesData,
    },
    dispatch,
  );

export type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  StackScreenProps<RootStackParamList, StackNavigationScreens.Business>;
export default connect(mapStateToProps, mapDispatchToProps)(BusinessesScreen);
