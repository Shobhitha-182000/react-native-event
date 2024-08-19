import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogoutScreen = () => (
  <View style={styles.container}>
    <Text>Logout Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoutScreen;
