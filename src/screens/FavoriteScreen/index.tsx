import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextCustom from 'components/atoms/TextCustom';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <TextCustom>Favorites</TextCustom>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {},
});
