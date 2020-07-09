import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {ApplicationMainState} from '../index';
import {BusinessesState} from './types';
import yelpApi from '../../configs/yelpApi';
import {fetchBusinessesDataError, fetchBusinessesDataRequest, fetchBusinessesDataSuccess} from './actions';

export const thunkGetBusinessesData = (term: string): ThunkAction<void, ApplicationMainState, null, Action<string>> =>
  async (dispatch): Promise<void> => {
    dispatch(fetchBusinessesDataRequest())
    try {
      const response = await yelpApi.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'toronto'
        }
      });
      console.log(response.data.businesses.length)
      dispatch(fetchBusinessesDataSuccess({}));
    } catch (e) {
      console.log(e);
      dispatch(fetchBusinessesDataError({}));
    }
  }
