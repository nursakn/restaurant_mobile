import {StyleSheet, TextStyle as TextStyleProp} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import TextCustom from './TextCustom';
import TouchableAnimated from './TouchableAnimated';

interface IProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  ButtonStyle?: StyleMedia[] | StyleMedia;
  TextStyle?: TextStyleProp;
}

const ButtonCustom: React.FC<IProps> = ({
  onPress,
  title,
  disabled = false,
  ButtonStyle,
  TextStyle,
}) => {
  return (
    <TouchableAnimated
      style={[styles.container, ButtonStyle]}
      onPress={onPress}
      disabled={disabled}>
      <TextCustom
        Style={[styles.title, TextStyle ? TextStyle : {}]}
        textType="bold">
        {title}
      </TextCustom>
    </TouchableAnimated>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    color: colors.text_inverted,
  },
});
