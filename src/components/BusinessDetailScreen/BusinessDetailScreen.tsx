import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Props} from './index';

const BusinessDetailScreen = ({route, navigation, thunkGetBusinessDetailData}: Props) => {
  useEffect(() => {
    thunkGetBusinessDetailData(route.params.id);
  }, [])

  return (
    <View>
      <Text>Details screen</Text>
    </View>
  )
}

export default BusinessDetailScreen;