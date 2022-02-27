import React from 'react';
import HomeScreen from 'screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from 'navigation/types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
