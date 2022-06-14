import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {SearchInputInputProps} from './SearchInputTypes';

const SearchInput = ({
  searchTermValue,
  onSearchTermChange,
  placeholder,
  autoCorrect,
  autoCapitalize,
  onSearchTermSubmit,
}: SearchInputInputProps) => {
  return (
    <View style={styles.container}>
      <Icon name="search" style={styles.searchIcon} />
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        style={styles.input}
        placeholder={placeholder}
        value={searchTermValue}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
