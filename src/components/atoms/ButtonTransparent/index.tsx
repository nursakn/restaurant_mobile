import {TextStyle as TextStyleProp} from 'react-native';
import React from 'react';
import TextCustom from 'atoms/TextCustom';
import TouchableAnimated from 'atoms/TouchableAnimated';

interface IProps {
  title: string;
  onPress: () => void;
  ButtonStyle?: StyleMedia[] | StyleMedia;
  TextStyle?: TextStyleProp;
  disabled?: boolean;
}

const ButtonTransparent: React.FC<IProps> = ({
  title,
  onPress,
  ButtonStyle,
  TextStyle,
  disabled,
}) => {
  return (
    <TouchableAnimated
      onPress={onPress}
      style={ButtonStyle}
      disabled={disabled}>
      <TextCustom Style={TextStyle}>{title}</TextCustom>
    </TouchableAnimated>
  );
};

export default ButtonTransparent;
