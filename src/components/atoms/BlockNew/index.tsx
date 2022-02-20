import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import TouchableAnimated from './TouchableAnimated';

interface IProps {}

const BlockNew: React.FC<IProps> = () => {
  return <TouchableAnimated onPress={() => {}} style={styles.container} />;
};

export default BlockNew;

const styles = StyleSheet.create({
  container: {
    height: 130,
    minWidth: '45%',
    maxWidth: '48%',
    marginBottom: 10,
    flex: 1,
    backgroundColor: colors.gray,
    borderRadius: 8,
  },
});
