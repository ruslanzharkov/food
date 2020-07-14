import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {Business} from '../../../store/businesses/types';
import BusinessListItem from '../BusinessListItem';
import {StackNavigationScreens} from '../../../navigation/types';
import BusinessListItemLoader from '../BusinessListItemLoader';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

interface BusinessListProps {
  title: string;
  loading: boolean;
  businesses: Business[];
  showsHorizontalScrollIndicator?: boolean;
}

const BusinessList = ({title, loading, businesses, showsHorizontalScrollIndicator}: BusinessListProps) => {
  if (loading) {
    return (
      <>
        <ContentLoader
          speed={1}
          width={170}
          height={30}
          viewBox="0 0 170 30"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <Rect x="15" y="0" rx="3" ry="3" width="140" height="20" />
        </ContentLoader>
        <View style={styles.businessLoadersContainer}>
          <BusinessListItemLoader/>
          <BusinessListItemLoader/>
        </View>
      </>
    )
  }

  if (businesses.length === 0) {
    return null;
  }

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
  businessLoadersContainer: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10
  }
})