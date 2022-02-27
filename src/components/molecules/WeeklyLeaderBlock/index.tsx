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

interface IProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<RouterStackParamList>,
    CompositeNavigationProp<
      NativeStackNavigationProp<HomeStackParamList>,
      BottomTabNavigationProp<TabStackParamList>
    >
  >;
}

const WeeklyLeaderBlock: React.FC<IProps> = ({navigation}) => {
  return (
    <TouchableAnimated
      style={styles.container}
      onPress={() => {
        navigation.navigate('RestaurantStack', {
          screen: 'RestaurantScreen',
          params: {
            id: 'HIHIHIHI',
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
    backgroundColor: colors.gray,
    borderRadius: 8,
    marginRight: 16,
  },
});
