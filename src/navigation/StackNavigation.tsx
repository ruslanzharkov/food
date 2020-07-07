import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen} from '../components/SearchScreen';

type RootStackParamList = {
  Search: undefined;
}

const RootStack = createStackNavigator<RootStackParamList>();

const StackLayout = () => (
  <RootStack.Navigator initialRouteName="Search">
    <RootStack.Screen
      name="Search"
      component={SearchScreen}
      options={{ title: 'Business Search' }}
    />
  </RootStack.Navigator>
);

export default StackLayout;
