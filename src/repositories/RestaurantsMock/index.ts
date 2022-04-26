import {AxiosInstance} from 'axios';
import NetApi from '../NetApi';

export default class RestaurantsMock extends NetApi {
  private getRestaurantsUrl = '/api/restaurant/list';
  private findRestaurantUrl = '/api/restaurant/find';
  private findRestaurantExtendedUrl = '/api/restaurant/findExtended';

  constructor(http: {client: AxiosInstance}) {
    super(http);
  }

  async getRestaurants() {
    try {
      console.log('started sign in');
      return this.get(this.getRestaurantsUrl, {});
    } catch (e) {
      console.log('RestauranMock getRestaurants error:' + JSON.stringify(e));
    }
  }

  async getRestaurant(id: string) {
    try {
      console.log('started sign in');
      return this.post(this.findRestaurantExtendedUrl, {}, {id});
    } catch (e) {
      console.log('RestauranMock getRestaurant error:' + JSON.stringify(e));
    }
  }
}
