import {connect} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import {Action, bindActionCreators, Dispatch} from 'redux';

import {ApplicationMainState} from '../../store';
import BusinessDetailScreen from './BusinessDetailScreen';

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

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetailScreen);