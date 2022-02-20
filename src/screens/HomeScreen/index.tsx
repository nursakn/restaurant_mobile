import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextCustom from '../../components/atoms/TextCustom';
import WeeklyLeaderBlock from '../../components/molecules/WeeklyLeaderBlock';
import BlockNew from '../../components/atoms/BlockNew';
import HeaderSimple from '../../components/molecules/HeaderSimple';
import {
  HomeStackParamList,
  RouterStackParamList,
  TabStackParamList,
} from '../../navigation/types';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

interface IProps {
  navigation: HomeScreenNavigation;
}

export type HomeScreenNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<RouterStackParamList>,
  CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackParamList>,
    BottomTabNavigationProp<TabStackParamList>
  >
>;

const HomeScreen: React.FC<IProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <HeaderSimple title="Home" />
        <TextCustom Style={styles.categoryTitle} textType="bold">
          Weekly leaders
        </TextCustom>
        <ScrollView
          style={styles.categoryWeekly}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <WeeklyLeaderBlock navigation={navigation} />
        </ScrollView>
        <TextCustom Style={styles.categoryTitle} textType="bold">
          Looking for someting new?
        </TextCustom>
        <View style={styles.categoryNew}>
          <BlockNew />
          <BlockNew />
          <BlockNew />
          <BlockNew />
          <BlockNew />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  categoryWeekly: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 18,
    marginBottom: 18,
  },
  categoryNew: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
