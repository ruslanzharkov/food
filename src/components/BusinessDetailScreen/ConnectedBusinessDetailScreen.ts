import {connect} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import {StackScreenProps} from '@react-navigation/stack';
import {Action, bindActionCreators, Dispatch} from 'redux';

import {ApplicationMainState} from '../../store';
import BusinessDetailScreen from './BusinessDetailScreen';
import {
  RootStackParamList,
  StackNavigationScreens,
} from '../../navigation/types';
import {thunkGetBusinessDetailData} from '../../store/businessDetail/thunks';
import {BusinessDetailState} from '../../store/businessDetail/types';

type StateToProps = {
  businessDetail: BusinessDetailState;
};

type DispatchToProps = {
  thunkGetBusinessDetailData(
    businessId: string,
  ): ThunkAction<void, ApplicationMainState, null, Action<string>>;
};

const mapStateToProps = (state: ApplicationMainState): StateToProps => ({
  businessDetail: state.businessDetail,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators(
    {
      thunkGetBusinessDetailData: thunkGetBusinessDetailData,
    },
    dispatch,
  );

export type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  StackScreenProps<RootStackParamList, StackNavigationScreens.BusinessDetail>;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BusinessDetailScreen);
