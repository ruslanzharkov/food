import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {Business} from '../../../store/businesses/types';
import BusinessListItem from '../BusinessListItem';
import {StackNavigationScreens} from '../../../navigation/types';

interface BusinessListProps {
  title: string;
  businesses: Business[];
  showsHorizontalScrollIndicator?: boolean;
}

const BusinessList = ({title, businesses, showsHorizontalScrollIndicator}: BusinessListProps) => {
  const navigation = useNavigation()
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={
          ({item}: {item: Business}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate(StackNavigationScreens.BusinessDetail, {
              id: item.id
            })}>
              <BusinessListItem business={item}/>
            </TouchableOpacity>
          )
          }
        }
      />
    </View>
  )
}

export default BusinessList;

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10
  }
})