import {Store, createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer, {ApplicationMainState} from './index';

const middlewares = [thunkMiddleware]
const enhancer = compose(applyMiddleware(...middlewares));

export default function configureStore(initialState: ApplicationMainState): Store<ReturnType<typeof rootReducer>> {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}