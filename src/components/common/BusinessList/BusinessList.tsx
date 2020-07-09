import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Business} from '../../../store/businesses/types';

interface BusinessListProps {
  title: string;
  businesses: Business[];
}

const BusinessList = ({title, businesses}: BusinessListProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {businesses.length}</Text>
    </View>
  )
}

export default BusinessList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})