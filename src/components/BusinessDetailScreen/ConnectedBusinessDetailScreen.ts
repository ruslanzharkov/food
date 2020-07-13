import {connect} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import { StackScreenProps } from '@react-navigation/stack';
import {Action, bindActionCreators, Dispatch} from 'redux';

import {ApplicationMainState} from '../../store';
import BusinessDetailScreen from './BusinessDetailScreen';
import {RootStackParamList, StackNavigationScreens} from '../../navigation/types';

type StateToProps = {
  businessDetailInfo: any;
}

type DispatchToProps = {

}

const mapStateToProps = (state: ApplicationMainState): StateToProps => ({
  businessDetailInfo: {}
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({

  },
    dispatch
  );

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & StackScreenProps<RootStackParamList, StackNavigationScreens.BusinessDetail>;
export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetailScreen);