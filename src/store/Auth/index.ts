import {action, makeObservable, observable} from 'mobx';

class AuthStore {
  isAuthorized = false;

  constructor() {
    makeObservable(this, {
      isAuthorized: observable,
      logIn: action,
      logOut: action,
    });
  }

  logIn() {
    this.isAuthorized = true;
  }

  logOut() {
    this.isAuthorized = false;
  }
}

export default new AuthStore();
