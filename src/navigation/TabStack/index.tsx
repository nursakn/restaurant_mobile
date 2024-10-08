import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from 'constants/colors';
import HomeStack from 'navigation/HomeStack';
import SearchStack from 'navigation/SearchStack';
import {TabStackParamList} from 'navigation/types';
import MapScreen from 'screens/MapScreen';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? colors.main : colors.gray}
              name="apps"
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? colors.main : colors.gray}
              name="search"
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? colors.main : colors.gray}
              name="map-outline"
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
