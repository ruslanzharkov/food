import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {isEmpty} from 'lodash';

import {Props} from './index';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {addCommaForStringInCollection} from '../../utils/stringConverter';

const BusinessDetailScreen = ({route, thunkGetBusinessDetailData, businessDetail}: Props) => {
  const [error, setError] = useState<string>('');
  const businessDetailError = businessDetail?.error;
  const businessDetailInfo = businessDetail.data;

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

  if (isEmpty(businessDetailInfo)) {
    return null;
  }

  return (
    <View style={{position: 'relative'}}>
      <Image source={{uri: businessDetailInfo.image_url}} style={styles.businessImage} />
      <View style={styles.businessDetailOverlay}>
        <ScrollView style={styles.scrollView}>
          <>
            <View style={styles.businessDetailInfoStar}>
              <FontAwesomeIcon name="star" size={16} style={styles.starIcon} />
              <Text style={styles.businessDetailTitle}>{businessDetailInfo.rating} Stars</Text>
            </View>
            <Text style={styles.businessDetailName}>{businessDetailInfo.name}</Text>
            <View style={styles.categories}>
              {businessDetailInfo.categories.map((category, index) => (
                <Text style={styles.businessDetailCategoryTitle}>
                  {addCommaForStringInCollection(category.title, businessDetailInfo.categories.length, index)}
                </Text>
              ))}
            </View>
            <View style={styles.businessDetailLocation}>
              <MaterialIcons name="location-on" size={20} color="black" />
              {businessDetailInfo.location.display_address.map((displayAddress, index) => (
                <Text>
                  {addCommaForStringInCollection(displayAddress, businessDetailInfo.location.display_address.length, index)}
                </Text>
              ))}
            </View>
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
  businessDetailOverlay: {
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
  businessDetailTitle: {
    color: '#252528'
  },
  businessDetailName: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: 'bold'
  },
  categories: {
    flexDirection: 'row'
  },
  businessDetailCategoryTitle: {
    color: '#505059',
    fontSize: 14
  },
  businessDetailLocation: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  starIcon: {
    alignSelf: 'center',
    color: '#f7c01d',
    paddingRight: 3,
    borderColor: '#000'
  },
});