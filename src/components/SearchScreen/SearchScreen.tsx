import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchInput from '../common/SearchInput';

function SearchScreen() {
  return (
    <View style={styles.searchContainer}>
      <SearchInput placeholder={'Search'} />

    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#fff',
    flex: 1
  }
});