import {AxiosInstance} from 'axios';

export default class NetApi {
  $http: AxiosInstance;

  constructor(http: {client: AxiosInstance}) {
    this.$http = http.client;
  }

  async get(url: string, params: any) {
    try {
      return await this.$http.get(url, params);
    } catch (e) {
      console.log('HTTP get error: ', e);
    }
  }

  async post(url: string, params: any, body = {}) {
    try {
      return await this.$http.post(url, body, params);
    } catch (e) {
      console.log('HTTP post error: ', e);
    }
  }

  async put(url: string, params: any, body = {}) {
    try {
      return await this.$http.put(url, body, params);
    } catch (e) {
      console.log('HTTP put error: ', JSON.stringify(e));
    }
  }

  async patch(url: string, params: any, body = {}) {
    try {
      return await this.$http.patch(url, body, params);
    } catch (e) {
      console.log('HTTP patch error: ', e);
    }
  }

  async delete(url: string, params: any) {
    try {
      return await this.$http.delete(url, params);
    } catch (e) {
      console.log('HTTP DELETE Error', e);
      return await this.$http.delete(url, params);
    }
  }
}
