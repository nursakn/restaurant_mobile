import {AxiosInstance} from 'axios';
import NetApi from '../NetApi';

export default class AuthMock extends NetApi {
  private signInUrl = '/login/';
  private signUpUrl = '/register/';

  constructor(http: {client: AxiosInstance}) {
    super(http);
  }

  async signIn(username: string, password: string) {
    try {
      console.log('started sign in');
      return this.post(
        this.signInUrl,
        {},
        {
          username,
          password,
        },
      );
    } catch (e) {
      console.log('AuthMock signIn error:' + JSON.stringify(e));
    }
  }

  async signUp(username: string, password: string) {
    try {
      console.log('started sign in');
      return this.post(
        this.signUpUrl,
        {},
        {
          username,
          password,
        },
      );
    } catch (e) {
      console.log('AuthMock signUp error:' + JSON.stringify(e));
    }
  }
}
