import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RestaurantStackParamList, RouterStackParamList} from 'navigation/types';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';

interface IProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<RouterStackParamList>,
    NativeStackNavigationProp<RestaurantStackParamList, 'RestaurantScreen'>
  >;
  route: RouteProp<RestaurantStackParamList, 'RestaurantScreen'>;
}

const RestaurantScreen: React.FC<IProps> = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
