import React from 'react';
import Router from 'navigation/Router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Router />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
