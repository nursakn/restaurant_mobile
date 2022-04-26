import React from 'react';
import Router from 'navigation/Router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import AppContextProvider from 'context/App';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
