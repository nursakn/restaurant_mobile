import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchInput from 'components/atoms/SearchInput';
import TextCustom from 'components/atoms/TextCustom';

interface IProps {}

const SearchScreen: React.FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <TextCustom>SearchScreen</TextCustom>
      <SearchInput />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
