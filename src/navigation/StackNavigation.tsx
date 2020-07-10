import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConnectedSearchScreen from '../components/BusinessesScreen';

type RootStackParamList = {
  Business: undefined;
}

const RootStack = createStackNavigator<RootStackParamList>();

const StackLayout = () => (
  <RootStack.Navigator initialRouteName="Business">
    <RootStack.Screen
      name="Business"
      component={ConnectedSearchScreen}
      options={{ title: 'Business Search' }}
    />
  </RootStack.Navigator>
);

export default StackLayout;
