import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import MapItem from './src/components/MapItem';
import MapInput from './src/components/MapInput';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <View style={styles.container}>
        <Header title={'Health Tech'} />
        <MapInput />
        <Search />
        <MapItem />
      </View>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
