import {View, StyleSheet} from 'react-native';
import React from 'react';
import TextCustom from 'atoms/TextCustom';

interface IProps {
  title: string;
}

const HeaderSimple: React.FC<IProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <TextCustom Style={styles.title} textType="bold">
        {title}
      </TextCustom>
    </View>
  );
};

export default HeaderSimple;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 38,
  },
});
