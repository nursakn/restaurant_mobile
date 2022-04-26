import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RestaurantStackParamList, RouterStackParamList} from 'navigation/types';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import TextCustom from 'components/atoms/TextCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import TouchableAnimated from 'components/atoms/TouchableAnimated';
import Table from 'components/atoms/Table';
import {colors} from 'constants/colors';
import {AppContext} from 'context/App';
import {observer} from 'mobx-react';
import {Table as ITable} from 'types/App';

interface IProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<RouterStackParamList>,
    NativeStackNavigationProp<RestaurantStackParamList, 'RestaurantScreen'>
  >;
  route: RouteProp<RestaurantStackParamList, 'RestaurantScreen'>;
}

const RestaurantScreen: React.FC<IProps> = ({navigation, route}) => {
  const bottomRef = useRef<BottomSheet>(null);

  const [currentTable, setCurrentTable] = useState<ITable>();

  const openTable = (table: ITable) => {
    bottomRef.current?.snapToIndex(2);
    setCurrentTable(table);
  };

  const snapPoints = useMemo(() => [150, '50%', '100%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const [heightAvailable, setHeightAvailable] = useState(0);
  const [widthAvailable, setWidthAvailable] = useState(0);

  useEffect(() => {
    setWidthAvailable(Dimensions.get('window').width);
    setHeightAvailable(Dimensions.get('window').height);
  }, []);

  const {
    stores: {restaurantsStore},
  } = useContext(AppContext);

  useEffect(() => {
    restaurantsStore.getRestaurant(route.params.id);
  }, [restaurantsStore, route.params.id]);

  const offset = useSharedValue({x: 0, y: 0});
  const start = useSharedValue({x: 0, y: 0});

  const gestureHandler = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate(e => {
      if (
        start.value.y + e.translationY > 0 &&
        start.value.x + e.translationX > 0
      ) {
        offset.value = {
          x: offset.value.x,
          y: offset.value.y,
        };
      } else if (
        start.value.x + e.translationX > 0 &&
        Math.abs(start.value.y + e.translationY) > 1500 - heightAvailable
      ) {
        offset.value = {
          x: offset.value.x,
          y: offset.value.y,
        };
      } else if (
        start.value.y + e.translationY > 0 &&
        Math.abs(start.value.x + e.translationX) > 1500 - widthAvailable
      ) {
        offset.value = {
          x: offset.value.x,
          y: offset.value.y,
        };
      } else if (start.value.x + e.translationX > 0) {
        offset.value = {
          x: offset.value.x,
          y: e.translationY + start.value.y,
        };
      } else if (start.value.y + e.translationY > 0) {
        offset.value = {
          x: e.translationX + start.value.x,
          y: offset.value.y,
        };
      } else if (
        Math.abs(start.value.x + e.translationX) > 1500 - widthAvailable &&
        Math.abs(start.value.y + e.translationY) > 1500 - heightAvailable
      ) {
        offset.value = {
          x: offset.value.x,
          y: offset.value.y,
        };
      } else if (
        Math.abs(start.value.x + e.translationX) >
        1500 - widthAvailable
      ) {
        offset.value = {
          x: offset.value.x,
          y: e.translationY + start.value.y,
        };
      } else if (
        Math.abs(start.value.y + e.translationY) >
        1500 - heightAvailable
      ) {
        offset.value = {
          y: offset.value.y,
          x: e.translationX + start.value.x,
        };
      } else {
        offset.value = {
          y: e.translationY + start.value.y,
          x: e.translationX + start.value.x,
        };
      }
    })
    .onEnd(() => {
      start.value = offset.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value.x}, {translateY: offset.value.y}],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <GestureDetector gesture={gestureHandler}>
        <Animated.View style={[styles.animatedView, animatedStyle]}>
          {restaurantsStore.currentRestaurant?.tables.map(table => (
            <TouchableAnimated
              style={[
                styles.table,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  height: table.height,
                  width: table.width,
                  top: +table.coord_y,
                  left: +table.coord_x,
                  backgroundColor: 'yellow',
                },
              ]}
              key={table.id}
              onPress={() => {
                openTable(table);
              }}>
              <Table />
            </TouchableAnimated>
          ))}
        </Animated.View>
      </GestureDetector>
      <BottomSheet
        index={0}
        ref={bottomRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableOverDrag={true}>
        <View style={styles.bottomSheetContentContainer}>
          {restaurantsStore.currentRestaurant === null ||
          restaurantsStore.loading ? (
            <ActivityIndicator />
          ) : (
            <>
              <TextCustom textType="bold" Style={styles.name}>
                {restaurantsStore.currentRestaurant.name}
              </TextCustom>
              <TextCustom Style={styles.address}>
                {restaurantsStore.currentRestaurant?.address}
              </TextCustom>
              <View style={styles.topRow}>
                <View style={styles.active} />
                <TextCustom Style={styles.tablesCount}>
                  {restaurantsStore.currentRestaurant?.freeTables} /
                </TextCustom>
                <View style={styles.inactive} />
                <TextCustom Style={styles.tablesCount}>
                  {restaurantsStore.currentRestaurant?.allTables}
                </TextCustom>
              </View>
              <TextCustom Style={styles.info}>
                {restaurantsStore.currentRestaurant?.info}
              </TextCustom>
              <BottomSheetScrollView
                style={styles.picturesRow}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {restaurantsStore.currentRestaurant?.pictures.map(
                  (img, index) => (
                    <Image
                      style={styles.picture}
                      source={{uri: `data:image/png;base64,${img}`}}
                      key={index}
                    />
                  ),
                )}
              </BottomSheetScrollView>
              {currentTable ? (
                <>
                  <TextCustom Style={styles.tableId}>
                    Table Number: {currentTable.id}
                  </TextCustom>
                  <TextCustom Style={styles.tableSeats}>
                    Seats: {currentTable.num_of_person}
                  </TextCustom>
                  <TouchableAnimated
                    style={styles.reserveButton}
                    onPress={() => {
                      if (restaurantsStore.currentRestaurant)
                        navigation.navigate('ReserveScreen', {
                          table: currentTable,
                        });
                      else {
                        console.log('error');
                      }
                    }}>
                    <TextCustom Style={styles.reserveText}>
                      Reserve Table
                    </TextCustom>
                  </TouchableAnimated>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default observer(RestaurantScreen);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    position: 'relative',
  },
  bottomSheetContentContainer: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
  },
  animatedView: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 1500,
    height: 1500,
    backgroundColor: colors.background_main,
    padding: 15,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    fontSize: 18,
    marginRight: 5,
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  picturesRow: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  picture: {
    height: 200,
    width: 200,
    marginRight: 10,
    borderRadius: 5,
  },
  table: {
    position: 'absolute',
  },
  tableId: {
    fontSize: 16,
    marginBottom: 10,
  },
  tableSeats: {
    fontSize: 16,
    marginBottom: 10,
  },
  reserveButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveText: {
    fontSize: 16,
    color: colors.white,
  },
});
