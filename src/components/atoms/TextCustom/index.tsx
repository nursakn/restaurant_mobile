import {Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import {colors} from 'constants/colors';

interface IProps {
  children: React.ReactNode[] | React.ReactNode;
  Style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'italic' | 'light';
}

const TextCustom: React.FC<IProps> = ({children, Style, textType}) => {
  return (
    <Text
      style={[
        styles.baseStyle,
        Style,
        textType === 'regular'
          ? styles.textRegular
          : textType === 'bold'
          ? styles.textBold
          : textType === 'italic'
          ? styles.textItalic
          : textType === 'light'
          ? styles.textLight
          : styles.textRegular,
      ]}>
      {children}
    </Text>
  );
};

export default TextCustom;

const styles = StyleSheet.create({
  baseStyle: {
    color: colors.text_main,
  },
  textRegular: {
    fontFamily: 'RedHatDisplay-Regular',
  },
  textBold: {
    fontFamily: 'RedHatDisplay-Bold',
  },
  textItalic: {
    fontFamily: 'RedHatDisplay-Italic',
  },
  textLight: {
    fontFamily: 'RedHatDisplay-Light',
  },
});
