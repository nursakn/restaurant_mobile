import {action, makeObservable, observable} from 'mobx';
import AuthMock from 'repositories/AuthMock';
import BaseStore from 'store/BaseStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
export class AuthStore extends BaseStore {
  private authMock: AuthMock;
  isAuthorized = false;

  constructor(authMock: AuthMock) {
    super();
    this.authMock = authMock;
    makeObservable(this, {
      isAuthorized: observable,
      logIn: action,
      logOut: action,
    });
  }

  logIn() {
    this.makeRequest({
      request: () => this.authMock.signIn('Nurlan', 'nurlan'),
      success: async res => {
        console.log('MY TOKEN: ' + res.data.token);
        await AsyncStorage.setItem('AccessToken', res.data.token);
        this.isAuthorized = true;
      },
      error: e => {
        this.isAuthorized = false;
        console.log('ERROR ON LOG IN' + JSON.stringify(e));
      },
    });
  }

  signUp() {
    this.makeRequest({
      request: () => this.authMock.signUp('Nurlan', 'nurlan'),
      success: async res => {
        console.log('MY TOKEN: ' + res.data.token);
        await AsyncStorage.setItem('AccessToken', res.data.token);
        this.isAuthorized = true;
      },
      error: e => {
        this.isAuthorized = false;
        console.log('ERROR ON LOG IN' + JSON.stringify(e));
      },
    });
  }

  logOut() {
    this.isAuthorized = false;
  }
}
