import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/store';
import AppWrapper from './src';

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto"
          backgroundColor="#23A3FF"
        />

        <AppWrapper/>
      </SafeAreaView>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
