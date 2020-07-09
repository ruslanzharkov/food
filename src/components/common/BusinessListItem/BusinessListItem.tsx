import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Business} from '../../../store/businesses/types';

interface BusinessListItem {
  business: Business;
}

const BusinessListItem = ({business}: BusinessListItem) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: business.image_url}} />
      <Text style={styles.businessName}>{business.name}</Text>
      <View>
        <View style={styles.businessInfo}>
          <AntDesign name="star" size={16} color="black" />
          <Text>{business.rating} Stars</Text>
        </View>
        <View style={styles.businessInfo}>
          <AntDesign name="eye" size={16} color="black" />
          <Text>{business.review_count} Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default BusinessListItem;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  businessName: {
    fontWeight: 'bold'
  },
  businessInfo: {
    flexDirection: 'row'
  }
});
