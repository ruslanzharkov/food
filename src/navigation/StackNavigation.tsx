import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConnectedSearchScreen from '../components/BusinessesScreen';
import ConnectedBusinessDetailScreen from '../components/BusinessDetailScreen';

type RootStackParamList = {
  Business: undefined;
  BusinessDetail: {businessId: string}
}

const RootStack = createStackNavigator<RootStackParamList>();

const StackLayout = () => (
  <RootStack.Navigator initialRouteName="Business">
    <RootStack.Screen
      name="Business"
      component={ConnectedSearchScreen}
      options={{ title: 'Business Search' }}
    />
    <RootStack.Screen
      name="BusinessDetail"
      component={ConnectedBusinessDetailScreen}
    />
  </RootStack.Navigator>
);

export default StackLayout;
