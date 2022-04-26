import {StyleSheet, ScrollView, View, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextCustom from 'components/atoms/TextCustom';
import BlockNew from 'components/atoms/BlockNew';
import HeaderSimple from 'components/molecules/HeaderSimple';
import {
  HomeStackParamList,
  RouterStackParamList,
  TabStackParamList,
} from 'navigation/types';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {colors} from 'constants/colors';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';

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
  const {
    stores: {restaurantsStore},
  } = useContext(AppContext);

  useEffect(() => {
    restaurantsStore.getRestaurants();
  }, [restaurantsStore]);

  useEffect(() => {
    console.log('LOADING: ' + restaurantsStore.loading);
  }, [restaurantsStore.loading]);

  return (
    <SafeAreaView>
      {restaurantsStore.loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          <HeaderSimple title="Home" />
          <TextCustom Style={styles.categoryTitle} textType="bold">
            Weekly leaders
          </TextCustom>
          {/* <ScrollView
            style={styles.categoryWeekly}
            contentContainerStyle={styles.categoryWeeklyContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <WeeklyLeaderBlock
              navigation={navigation}
              restuarant={WeeklyLeader}
            />
          </ScrollView> */}
          <TextCustom Style={styles.categoryTitle} textType="bold">
            Looking for someting new?
          </TextCustom>
          <View style={styles.categoryNew}>
            {restaurantsStore.restaurantsList.map(restaurant => (
              <BlockNew
                navigation={navigation}
                restaurant={restaurant}
                key={restaurant.id}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background_main,
  },
  categoryWeekly: {
    marginBottom: 16,
  },
  categoryWeeklyContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
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
