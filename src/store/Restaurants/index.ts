import {action, makeObservable, observable} from 'mobx';
import {RestaurantI, RestaurantShort} from './../../types/App';
import RestaurantsMock from 'repositories/RestaurantsMock';
import BaseStore from 'store/BaseStore';

export class RestaurantsStore extends BaseStore {
  private restaurantsMock: RestaurantsMock;
  restaurantsList: RestaurantShort[];
  currentRestaurant: RestaurantI | null;

  constructor(restaurantsMock: RestaurantsMock) {
    super();
    this.restaurantsMock = restaurantsMock;
    this.restaurantsList = [];
    this.currentRestaurant = null;
    makeObservable(this, {
      restaurantsList: observable,
      getRestaurants: action,
    });
  }

  async getRestaurants() {
    this.makeRequest({
      request: () => this.restaurantsMock.getRestaurants(),
      success: res => {
        this.restaurantsList = res.data;
        console.log(this.restaurantsList);
      },
    });
  }

  async getRestaurant(id: string) {
    this.makeRequest({
      request: () => this.restaurantsMock.getRestaurant(id),
      success: res => {
        this.currentRestaurant = res.data;
        console.log(this.currentRestaurant);
      },
    });
  }
}
