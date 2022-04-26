import RestaurantsMock from 'repositories/RestaurantsMock';
import {RestaurantsStore} from 'store/Restaurants';
import {AuthStore} from 'store/Auth';
import AuthMock from 'repositories/AuthMock';
import NetApi from 'repositories/NetApi';
import HttpClient from 'services/HttpClient';

const services = {
  HttpClient: new HttpClient(),
};

const repositories = {
  NetApi: new NetApi(services.HttpClient),
  authMock: new AuthMock(services.HttpClient),
  restaurantsMock: new RestaurantsMock(services.HttpClient),
};

const stores = {
  authStore: new AuthStore(repositories.authMock),
  restaurantsStore: new RestaurantsStore(repositories.restaurantsMock),
};

export default {
  services,
  repositories,
  stores,
};
