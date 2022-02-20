import {StyleSheet, View} from 'react-native';
import React from 'react';
import AuthForm from '../organisms/AuthForm';
import ButtonCustom from '../atoms/ButtonCustom';
import ButtonTransparent from '../atoms/ButtonTransparent';
import AuthStore from '../../store/Auth';

const SignInTemplate: React.FC = () => {
  const signIn = () => {
    AuthStore.logIn();
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <AuthForm from="signIn" />
      </View>
      <ButtonCustom onPress={signIn} title="Sign in" />
      <ButtonTransparent onPress={() => {}} title="Already have an account?" />
    </View>
  );
};

export default SignInTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    alignItems: 'center',
    marginVertical: 40,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});