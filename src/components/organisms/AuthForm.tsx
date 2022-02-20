import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import InputCustom from '../atoms/InputCustom';
import TextCustom from '../atoms/TextCustom';

interface IProps {
  title?: string;
  from: 'signIn' | 'signUp';
}

const AuthForm: React.FC<IProps> = ({title, from}) => {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextCustom textType="bold" Style={styles.title}>
        {title ? title : from === 'signIn' ? 'Sign In' : 'Sign Up'}
      </TextCustom>
      <InputCustom
        placeHolder="User Name"
        value={uname}
        onChangeText={setUname}
      />
      <InputCustom
        placeHolder="User Name"
        value={uname}
        onChangeText={setUname}
      />
      <InputCustom
        placeHolder="User Name"
        value={uname}
        onChangeText={setUname}
      />
      <InputCustom
        placeHolder="Password"
        value={password}
        onChangeText={setPassword}
        password
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: colors.main,
    borderWidth: 1,
  },
  title: {
    fontSize: 28,
    color: colors.text_main,
  },
});
