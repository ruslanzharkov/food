import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchInput from '../common/SearchInput';
import {AUTO_CAPITALIZE} from '../../constants/input';
import {Props} from './ConnectedSearchScreen';

function SearchScreen(props: Props) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [error, setError] = React.useState('');
  const businesses = props.businesses;

  const onTermSubmit = () => {
    props.thunkGetBusinessesData(searchTerm);
  }

  React.useEffect(() => {
    console.log(businesses)
      setError(businesses?.error.message)
  }, [businesses])

  return (
    <View style={styles.searchContainer}>
      <SearchInput
        autoCapitalize={AUTO_CAPITALIZE.none}
        placeholder={'Search'}
        autoCorrect={false}
        searchTermValue={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={onTermSubmit}
      />
      {error ? <Text>{error}</Text> : null}

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