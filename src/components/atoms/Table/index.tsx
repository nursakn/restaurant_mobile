import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from 'constants/colors';

const Table = () => {
  return <View style={[styles.container, {}]} />;
};

export default Table;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    width: '100%',
    height: '100%',
  },
});
