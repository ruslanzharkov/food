import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

interface SearchInputInputProps {
  onChange?: (value: string) => void;
  placeholder: string
}

const SearchInput = ({onChange, placeholder}: SearchInputInputProps) => {
  return (
   <View style={styles.container}>
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