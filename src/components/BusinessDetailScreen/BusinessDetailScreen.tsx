import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Alert, ScrollView} from 'react-native';
import {Props} from './index';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const BusinessDetailScreen = ({route, navigation, thunkGetBusinessDetailData, businessDetail}: Props) => {
  const [error, setError] = useState<string>('');
  const businessDetailError = businessDetail?.error;
  const businessDetailInfo = businessDetail.data;

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
    <View style={{position: 'relative'}}>
      <Image source={{uri: businessDetailInfo.image_url}} style={styles.businessImage} />
      <View style={styles.businessDetailInfoOverlay}>
        <ScrollView style={styles.scrollView}>
          <>
            <View style={styles.businessDetailInfoStar}>
              <FontAwesomeIcon name="star" size={16} style={styles.starIcon} />
              <Text style={styles.businessDetailInfoTitle}>{businessDetailInfo.rating} Stars</Text>
            </View>
            <Text style={styles.businessDetailInfoName}>{businessDetailInfo.name}</Text>
          </>
        </ScrollView>
      </View>
    </View>
  )
}

export default BusinessDetailScreen;

export const styles = StyleSheet.create({
  businessImage: {
    width: '100%',
    height: 240
  },
  businessDetailInfoOverlay: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: '300%',
    position: 'absolute',
    top: '90%'
  },
  scrollView: {
    marginHorizontal: 15,
    marginTop: 20
  },
  businessDetailInfoStar: {
    flexDirection: 'row',
  },
  businessDetailInfoTitle: {
    color: '#505059'
  },
  businessDetailInfoName: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: 'bold'
  },
  starIcon: {
    alignSelf: 'center',
    color: '#f7c01d',
    paddingRight: 3,
    borderColor: '#000'
  },
});