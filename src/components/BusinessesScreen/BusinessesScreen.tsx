import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import SearchInput from '../common/SearchInput';
import BusinessList from '../common/BusinessList';

import {AUTO_CAPITALIZE} from '../../constants/input';
import {Props} from './ConnectedBusinessesScreen';
import {filterBusinessesByPriceType} from '../../utils/filterBusinessesByPriceType';
import {Business} from '../../store/businesses/types';

function BusinessesScreen({businesses, thunkGetBusinessesData}: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [lowCostBusinesses, setLowCostBusinesses] = useState([] as Business[]);
  const [averageCostBusinesses, setAverageCostBusinesses] = useState([] as Business[]);
  const [highCostBusinesses, setHighCostBusinesses] = useState([] as Business[]);
  const [error, setError] = useState('');
  const businessesError = businesses?.error;
  const businessesCollection = businesses.data;

  const onTermSubmit = () => {
    thunkGetBusinessesData(searchTerm);
  }

  useEffect(() => {
    thunkGetBusinessesData('');
  }, [])

  useEffect(() => {
    setLowCostBusinesses(filterBusinessesByPriceType(businessesCollection, '$'));
    setAverageCostBusinesses(filterBusinessesByPriceType(businessesCollection, '$$'));
    setHighCostBusinesses(filterBusinessesByPriceType(businessesCollection, '$$$'));
  }, [businessesCollection])

  useEffect(() => {
      setError(businessesError?.message ? businessesError.message : '');
  }, [businessesError])

  return (
    <View style={styles.searchContainer}>
      <SearchInput
        autoCapitalize={AUTO_CAPITALIZE.none}
        placeholder="Search"
        autoCorrect={false}
        searchTermValue={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={onTermSubmit}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <BusinessList
          title="Cost Effective"
          showsHorizontalScrollIndicator={false}
          businesses={lowCostBusinesses}
        />
        <BusinessList
          title="Bit Pricier"
          showsHorizontalScrollIndicator={false}
          businesses={averageCostBusinesses}
        />
        <BusinessList
          title="Big Spender"
          showsHorizontalScrollIndicator={false}
          businesses={highCostBusinesses}
        />
      </ScrollView>
    </View>
  );
}

export default BusinessesScreen;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#fff',
    flex: 1
  }
});