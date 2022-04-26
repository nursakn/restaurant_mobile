import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RestaurantScreen from 'screens/RestaurantScreen';
import {RestaurantStackParamList} from 'navigation/types';
import ReserveScreen from 'screens/ReserveScreen';

const Stack = createNativeStackNavigator<RestaurantStackParamList>();

const RestaurantStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      <Stack.Screen name="ReserveScreen" component={ReserveScreen} />
    </Stack.Navigator>
  );
};

export default RestaurantStack;
