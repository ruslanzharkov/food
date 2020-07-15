import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Props} from './index';

const BusinessDetailScreen = ({route, navigation, thunkGetBusinessDetailData, businessDetail}: Props) => {
  const [error, setError] = useState<string>('');
  const businessDetailError = businessDetail?.error;

  useEffect(() => {
    thunkGetBusinessDetailData(route.params.id);
  }, []);

  useEffect(() => {
    setError(businessDetailError?.message ? businessDetailError?.message : '')
  }, [businessDetailError]);

  if (businessDetail.loading) {
    return (
      <Text>Loading...</Text>
    )
  }

  if (error) {
    return (
      <Text>{error}</Text>
    )
  }

  return (
    <View>
      <Text>Details screen</Text>
    </View>
  )
}

export default BusinessDetailScreen;