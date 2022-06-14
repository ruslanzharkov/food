import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConnectedSearchScreen from '../components/BusinessesScreen';
import ConnectedBusinessDetailScreen from '../components/BusinessDetailScreen';
import {RootStackParamList, StackNavigationScreens} from './types';

const RootStack = createStackNavigator<RootStackParamList>();

const StackLayout = () => (
  <RootStack.Navigator initialRouteName={StackNavigationScreens.Business}>
    <RootStack.Screen
      name={StackNavigationScreens.Business}
      component={ConnectedSearchScreen}
      options={{title: 'Business Search'}}
    />
    <RootStack.Screen
      name={StackNavigationScreens.BusinessDetail}
      component={ConnectedBusinessDetailScreen}
      options={{title: ''}}
    />
  </RootStack.Navigator>
);

export default StackLayout;
