import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CharactersList from './Container/CharactersList'
import { Provider } from 'react-redux'
import store from './Store/store'
import AppContainer from './Navigator/AppNavigator'

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}> */}
        {/* <CharactersList /> */}
        <AppContainer/>
      {/* </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
