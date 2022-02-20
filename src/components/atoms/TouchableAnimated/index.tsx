import React from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  onPress: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: StyleMedia | StyleMedia[];
}

const TouchableAnimated: React.FC<IProps> = ({
  onPress,
  children,
  disabled = false,
  style,
}) => {
  const buttonScale = useSharedValue(1);

  const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: withTiming(buttonScale.value, {duration: 100})}],
    };
  });

  const onPressIn = () => {
    buttonScale.value = 0.98;
  };

  const onPressOut = () => {
    buttonScale.value = 1;
  };

  return (
    <AnimatedButton
      activeOpacity={1}
      onPressIn={onPressIn}
      onPress={onPress}
      onPressOut={onPressOut}
      disabled={disabled}
      style={[style, animatedStyle]}>
      {children}
    </AnimatedButton>
  );
};

export default TouchableAnimated;
