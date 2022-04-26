import React, {useContext} from 'react';
import {observer} from 'mobx-react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from 'navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import TabStack from 'navigation/TabStack';
import {RouterStackParamList} from 'navigation/types';
import RestaurantStack from 'navigation/RestaurantStack';
import {AppContext} from 'context/App';

const Stack = createNativeStackNavigator<RouterStackParamList>();

declare global {
  namespace ReactNavigation {
    interface RouterParamList extends RouterStackParamList {}
  }
}

const Router: React.FC = () => {
  const {
    stores: {authStore},
  } = useContext(AppContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {authStore.isAuthorized ? (
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
};

export default observer(Router);
