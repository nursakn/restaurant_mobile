import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'constants/colors';
import TouchableAnimated from 'atoms/TouchableAnimated';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  HomeStackParamList,
  RouterStackParamList,
  TabStackParamList,
} from 'navigation/types';
import {RestaurantShort} from 'types/App';
import TextCustom from 'atoms/TextCustom';
import Icon from 'react-native-vector-icons/Ionicons';
interface IProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<RouterStackParamList>,
    CompositeNavigationProp<
      NativeStackNavigationProp<HomeStackParamList>,
      BottomTabNavigationProp<TabStackParamList>
    >
  >;
  restaurant: RestaurantShort;
}

const BlockNew: React.FC<IProps> = ({navigation, restaurant}) => {
  console.log(restaurant);
  return (
    <TouchableAnimated
      onPress={() => {
        navigation.navigate('RestaurantStack', {
          screen: 'RestaurantScreen',
          params: {
            id: restaurant.id.toString(),
          },
        });
      }}
      style={styles.container}>
      <TextCustom Style={styles.name} textType="bold">
        {restaurant.name}
      </TextCustom>
      <TextCustom Style={styles.address}>{restaurant.address}</TextCustom>
      <TextCustom>
        rating: {restaurant.rating} <Icon name="star" color={colors.main} />{' '}
      </TextCustom>
      <View style={styles.topRow}>
        <View style={styles.active} />
        <TextCustom Style={styles.tablesCount}>
          {restaurant.freeTables} /
        </TextCustom>
        <View style={styles.inactive} />
        <TextCustom Style={styles.tablesCount}>
          {restaurant.allTables}
        </TextCustom>
      </View>
    </TouchableAnimated>
  );
};

export default BlockNew;

const styles = StyleSheet.create({
  container: {
    minWidth: '45%',
    maxWidth: '48%',
    marginBottom: 10,
    padding: 16,
    flex: 1,
    borderRadius: 8,
    shadowColor: '#000',
    backgroundColor: colors.background_main,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  active: {
    backgroundColor: 'green',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },
  inactive: {
    backgroundColor: 'red',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },
  tablesCount: {
    fontSize: 14,
    marginRight: 5,
  },
  name: {
    fontSize: 18,
  },
  address: {
    fontSize: 12,
  },
});
