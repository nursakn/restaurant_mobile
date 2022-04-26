import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosInstance} from 'axios';

export default class HttpClient {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://192.168.0.193:3000',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.client.interceptors.request.use(
      async config => {
        // @ts-ignore
        config.headers.Authorization = await AsyncStorage.getItem(
          'AccessToken',
        );
        //@ts-ignore
        config.headers['if-none-match'] = '';
        return config;
      },
      err => {
        Promise.reject(err);
      },
    );
  }
}
