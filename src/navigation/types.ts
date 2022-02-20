import {NavigatorScreenParams} from '@react-navigation/native';

export type RouterStackParamList = {
  TabStack: NavigatorScreenParams<TabStackParamList>;
  RestaurantStack: NavigatorScreenParams<RestaurantStackParamList>;
  AuthStack: undefined;
};

export type TabStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
};

export type AuthStackParamList = {
  SignInScreen: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type RestaurantStackParamList = {
  RestaurantScreen: {id: string};
};

export type SearchStackParamList = {
  SearchScreen: undefined;
};
