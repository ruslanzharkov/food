import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {Props} from './index';

const BusinessDetailScreen = ({route, navigation, thunkGetBusinessDetailData, businessDetail}: Props) => {
  const [error, setError] = useState<string>('');
  const businessDetailError = businessDetail?.error;

  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
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
      <Image source={{uri: businessDetail.data.image_url}} style={styles.businessImage} />
    </View>
  )
}

export default BusinessDetailScreen;

export const styles = StyleSheet.create({
  businessImage: {
    width: '100%',
    height: 250
  }
});