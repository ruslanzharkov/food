import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConnectedSearchScreen from '../components/SearchScreen';

type RootStackParamList = {
  Search: undefined;
}

const RootStack = createStackNavigator<RootStackParamList>();

const StackLayout = () => (
  <RootStack.Navigator initialRouteName="Search">
    <RootStack.Screen
      name="Search"
      component={ConnectedSearchScreen}
      options={{ title: 'Business Search' }}
    />
  </RootStack.Navigator>
);

export default StackLayout;
