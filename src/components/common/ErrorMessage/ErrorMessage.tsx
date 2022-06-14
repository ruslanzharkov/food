import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, View} from 'react-native';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
  return (
    <View style={styles.errorContainer}>
      <EntypoIcons name="emoji-sad" size={28} style={styles.errorIcon} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorIcon: {
    color: '#e55a5d',
    marginRight: 10,
  },
  message: {
    width: 280,
    color: '#e55a5d',
    fontSize: 18,
  },
});
