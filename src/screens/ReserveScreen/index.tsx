import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextCustom from 'components/atoms/TextCustom';
import {RestaurantStackParamList, RouterStackParamList} from 'navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<RouterStackParamList>,
    NativeStackNavigationProp<RestaurantStackParamList, 'ReserveScreen'>
  >;

  route: RouteProp<RestaurantStackParamList, 'ReserveScreen'>;
}

const ReserveScreen: React.FC<IProps> = ({route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextCustom>
        {route.params.table.id} / {route.params.table.restaraunt_id}
      </TextCustom>
    </SafeAreaView>
  );
};

export default ReserveScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
