import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RestaurantStackParamList, RouterStackParamList} from 'navigation/types';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
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
interface IProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<RouterStackParamList>,
    NativeStackNavigationProp<RestaurantStackParamList, 'RestaurantScreen'>
  >;
  route: RouteProp<RestaurantStackParamList, 'RestaurantScreen'>;
}

const RestaurantScreen: React.FC<IProps> = ({}) => {
  const bottomRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const [heightAvailable, setHeightAvailable] = useState(0);
  const [widthAvailable, setWidthAvailable] = useState(0);

  useEffect(() => {
    setWidthAvailable(Dimensions.get('window').width);
    setHeightAvailable(Dimensions.get('window').height);
  }, []);

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

  const arr = [];

  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }

  return (
    <SafeAreaView style={styles.container}>
      <GestureDetector gesture={gestureHandler}>
        <Animated.View style={[styles.animatedView, animatedStyle]}>
          {arr.map(value => (
            <TouchableAnimated onPress={() => console.log(value)}>
              <Table />
            </TouchableAnimated>
          ))}
        </Animated.View>
      </GestureDetector>
      <BottomSheet
        index={1}
        ref={bottomRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableOverDrag={true}>
        <View style={styles.bottomSheetContentContainer}>
          <TextCustom>Hello</TextCustom>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  bottomSheetContentContainer: {
    flex: 1,
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
});
