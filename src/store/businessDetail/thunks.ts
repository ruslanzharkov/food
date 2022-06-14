import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {ApplicationMainState} from '../index';
import yelpApi from '../../configs/yelpApi';
import {
  fetchBusinessDetailRequest,
  fetchBusinessDetailSuccess,
  fetchBusinessDetailError,
} from './actions';

export const thunkGetBusinessDetailData =
  (
    businessId: string,
  ): ThunkAction<void, ApplicationMainState, null, Action<string>> =>
  async (dispatch): Promise<void> => {
    dispatch(fetchBusinessDetailRequest());
    try {
      const response = await yelpApi.get(`/${businessId}`);
      dispatch(fetchBusinessDetailSuccess(response.data));
    } catch (e) {
      const error = {
        message: 'Can not get business detail info, try again later',
      };
      dispatch(fetchBusinessDetailError(error));
    }
  };
