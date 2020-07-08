import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface SearchInputInputProps {
  onChange?: (value: string) => void;
  placeholder: string
}

const SearchInput = ({onChange, placeholder}: SearchInputInputProps) => {
  return (
   <View style={styles.container}>
     <Icon name="search" size={30}  />
     <TextInput
       placeholder={placeholder}
     />
   </View>
  )
}

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
})