import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {Business} from '../../../store/businesses/types';

interface BusinessListItem {
  business: Business;
}

const BusinessListItem = ({business}: BusinessListItem) => {
  return (
    <View style={styles.listItemContainer}>
      <Image style={styles.image} source={{uri: business.image_url}} />
      <Text style={styles.businessName}>{business.name}</Text>
      <View style={styles.businessInfoContainer}>
        <View style={styles.businessInfo}>
          <FontAwesomeIcon name="star" size={16} style={styles.starIcon} />
          <Text style={styles.businessInfoTitle}>{business.rating} Stars</Text>
        </View>
        <View style={styles.businessInfoReviews}>
          <FontAwesomeIcon name="eye" size={16} style={styles.reviewIcon} />
          <Text style={styles.businessInfoTitle}>
            {business.review_count} Reviews
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BusinessListItem;

const styles = StyleSheet.create({
  listItemContainer: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  businessName: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  businessInfoContainer: {
    flexDirection: 'row',
  },
  businessInfo: {
    flexDirection: 'row',
  },
  businessInfoTitle: {
    color: '#252528',
  },
  businessInfoReviews: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  starIcon: {
    alignSelf: 'center',
    color: '#f7c01d',
    paddingRight: 3,
    borderColor: '#000',
  },
  reviewIcon: {
    alignSelf: 'center',
    color: '#000',
    paddingRight: 3,
  },
});
