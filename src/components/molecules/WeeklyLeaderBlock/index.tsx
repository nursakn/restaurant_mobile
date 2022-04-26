import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from 'constants/colors';
import {
  HomeStackParamList,
  RouterStackParamList,
  TabStackParamList,
} from 'navigation/types';
import TouchableAnimated from 'atoms/TouchableAnimated';
import {RestaurantShort} from 'types/App';

interface IProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<RouterStackParamList>,
    CompositeNavigationProp<
      NativeStackNavigationProp<HomeStackParamList>,
      BottomTabNavigationProp<TabStackParamList>
    >
  >;
  restuarant: RestaurantShort;
}

const WeeklyLeaderBlock: React.FC<IProps> = ({navigation, restuarant}) => {
  return (
    <TouchableAnimated
      style={styles.container}
      onPress={() => {
        navigation.navigate('RestaurantStack', {
          screen: 'RestaurantScreen',
          params: {
            id: restuarant.id.toString(),
          },
        });
      }}
    />
  );
};

export default WeeklyLeaderBlock;

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: 300,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: colors.gray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
