import {Table} from 'types/App';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RouterStackParamList = {
  TabStack: NavigatorScreenParams<TabStackParamList>;
  RestaurantStack: NavigatorScreenParams<RestaurantStackParamList>;
  AuthStack: undefined;
};

export type TabStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
  MapScreen: undefined;
};

export type AuthStackParamList = {
  SignInScreen: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type RestaurantStackParamList = {
  RestaurantScreen: {id: string};
  ReserveScreen: {
    table: Table;
  };
};

export type SearchStackParamList = {
  SearchScreen: undefined;
};
