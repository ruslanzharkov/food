/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation';
import configureStore from './src/store/configureStore';
import {ApplicationMainState} from './src/store';

const initialState = {} as ApplicationMainState;
const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
