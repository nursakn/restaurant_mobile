import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from 'screens/SeachScreen';
import {SearchStackParamList} from 'navigation/types';

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
