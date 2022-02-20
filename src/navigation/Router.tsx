import React from 'react';
import {observer} from 'mobx-react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStore from '../store/Auth';
import {RouterStackParamList} from './types';
import RestaurantStack from './RestaurantStack';

const Stack = createNativeStackNavigator<RouterStackParamList>();

declare global {
  namespace ReactNavigation {
    interface RouterParamList extends RouterStackParamList {}
  }
}

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {AuthStore.isAuthorized ? (
        <>
          <Stack.Screen name="TabStack" component={TabStack} />
          <Stack.Screen name="RestaurantStack" component={RestaurantStack} />
        </>
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

export default observer(Router);