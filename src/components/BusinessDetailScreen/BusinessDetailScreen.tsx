import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {isEmpty} from 'lodash';

import {Props} from './index';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {addCommaForStringInCollection} from '../../utils/stringConverter';
import BusinessDetailLoader from '../common/BusinessDetailLoader';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';

const BusinessDetailScreen = ({
  route,
  thunkGetBusinessDetailData,
  businessDetail,
}: Props) => {
  const [error, setError] = useState<string>('');
  const businessDetailError = businessDetail?.error;
  const businessDetailInfo = businessDetail.data;

  useEffect(() => {
    thunkGetBusinessDetailData(route.params.id);
  }, []);

  useEffect(() => {
    setError(businessDetailError?.message ? businessDetailError?.message : '');
  }, [businessDetailError]);

  if (businessDetail.loading) {
    return <BusinessDetailLoader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (isEmpty(businessDetailInfo)) {
    return null;
  }

  return (
    <>
      <Image
        source={{uri: businessDetailInfo.image_url}}
        style={styles.businessImage}
      />
      <View style={styles.businessDetailOverlay}>
        <View style={styles.businessDetailContainer}>
          <View style={styles.businessDetailInfoStar}>
            <FontAwesomeIcon name="star" size={16} style={styles.starIcon} />
            <Text style={styles.businessDetailTitle}>
              {businessDetailInfo.rating} Stars
            </Text>
          </View>
          <Text style={styles.businessDetailName}>
            {businessDetailInfo.name}
          </Text>
          <View style={styles.categories}>
            {businessDetailInfo.categories.map((category, index) => (
              <Text style={styles.businessDetailCategoryTitle} key={index}>
                {addCommaForStringInCollection(
                  category.title,
                  businessDetailInfo.categories.length,
                  index,
                )}
              </Text>
            ))}
          </View>
          <View style={styles.businessDetailLocation}>
            <MaterialIcons
              name="location-on"
              size={20}
              style={styles.locationIcon}
            />
            {businessDetailInfo.location.display_address.map(
              (displayAddress, index) => (
                <Text key={index}>
                  {addCommaForStringInCollection(
                    displayAddress,
                    businessDetailInfo.location.display_address.length,
                    index,
                  )}
                </Text>
              ),
            )}
          </View>
          <FlatList
            data={businessDetailInfo.photos.slice(
              1,
              businessDetailInfo.photos.length,
            )}
            contentContainerStyle={{marginBottom: '100%'}}
            keyExtractor={(photo, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Image source={{uri: item}} style={styles.businessDetailImage} />
            )}
          />
        </View>
      </View>
    </>
  );
};

export default BusinessDetailScreen;

export const styles = StyleSheet.create({
  businessImage: {
    width: '100%',
    height: 200,
  },
  businessDetailOverlay: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    marginTop: -20,
  },
  businessDetailContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  businessDetailImage: {
    width: '100%',
    height: 290,
    marginBottom: 10,
    borderRadius: 20,
  },
  businessDetailInfoStar: {
    flexDirection: 'row',
  },
  businessDetailTitle: {
    color: '#252528',
  },
  businessDetailName: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
  },
  businessDetailCategoryTitle: {
    color: '#505059',
    fontSize: 14,
  },
  businessDetailLocation: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  starIcon: {
    alignSelf: 'center',
    color: '#f7c01d',
    paddingRight: 3,
    borderColor: '#000',
  },
  locationIcon: {
    color: '#000',
  },
});
