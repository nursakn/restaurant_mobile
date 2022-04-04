import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from 'constants/colors';

const Table = () => {
  return <View style={styles.container} />;
};

export default Table;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 200,
    backgroundColor: colors.gray,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
});
