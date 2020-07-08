import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchInput from '../common/SearchInput';
import {AUTO_CAPITALIZE} from '../common/constants/input';

function SearchScreen() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <View style={styles.searchContainer}>
      <SearchInput
        autoCapitalize={AUTO_CAPITALIZE.none}
        placeholder={'Search'}
        autoCorrect={false}
        searchTermValue={searchTerm}
        onSearchTermChange={(newSearchTerm: string) => setSearchTerm(newSearchTerm)}
        onSearchTermSubmit={() => console.log('yep')}
      />

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