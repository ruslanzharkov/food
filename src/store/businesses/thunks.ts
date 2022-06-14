import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {ApplicationMainState} from '../index';
import yelpApi from '../../configs/yelpApi';
import {
  fetchBusinessesDataError,
  fetchBusinessesDataRequest,
  fetchBusinessesDataSuccess,
} from './actions';

export const thunkGetBusinessesData =
  (
    term: string,
  ): ThunkAction<void, ApplicationMainState, null, Action<string>> =>
  async (dispatch): Promise<void> => {
    dispatch(fetchBusinessesDataRequest());
    try {
      const response = await yelpApi.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'toronto',
        },
      });
      dispatch(fetchBusinessesDataSuccess(response.data.businesses));
    } catch (e) {
      const error = {
        message: 'Something went wrong, please, try again later',
      };
      dispatch(fetchBusinessesDataError(error));
    }
  };
