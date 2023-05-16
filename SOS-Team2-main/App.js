import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {StyleSheet} from 'react-native';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <AppNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
