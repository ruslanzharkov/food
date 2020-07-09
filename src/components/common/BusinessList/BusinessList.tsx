import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Business} from '../../../store/businesses/types';
import BusinessListItem from '../BusinessListItem';

interface BusinessListProps {
  title: string;
  businesses: Business[];
}

const renderItem = ({item}: {item: Business}) => {
  return <BusinessListItem business={item}/>
}

const BusinessList = ({title, businesses}: BusinessListProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={renderItem}
      />
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