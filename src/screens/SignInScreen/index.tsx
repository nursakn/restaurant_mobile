import React from 'react';
import {observer} from 'mobx-react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignInTemplate from '../../components/templates/SignInTemplate';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const SignInScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} style={styles.scroll}>
        <SignInTemplate />
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(SignInScreen);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background_main,
  },
  scroll: {
    flexGrow: 1,
  },
});
