import {action, makeObservable, observable} from 'mobx';

interface requestType {
  request: () => Promise<any>;
  success: (data: any) => void;
  error?: (e: any) => void;
  onFinal?: () => void;
}

export default class BaseStore {
  loading: boolean = false;
  error: string = '';
  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      clear: action,
      makeRequest: action,
      setError: action,
      setLoading: action,
    });
  }

  clear() {
    this.loading = false;
    this.error = '';
  }

  async makeRequest({request, success, error, onFinal}: requestType) {
    this.setLoading(true);
    try {
      console.log('MAKE REQUEST');
      const res = await request();
      console.log('SUCCESS IN BASE STORE');
      if (res.status === 200 || res.status === 201) {
        // console.log('SUCCESS IN BASE STORE: ' + JSON.stringify(res));
        console.log('GOT IN SUCCESS');
        success(res);
      }
    } catch (e) {
      console.log('BaseStore makeRequest error: ', e);
      // console.log(JSON.stringify(e));
      if (error) {
        error(e);
      }
    }
    this.setLoading(false);
    if (onFinal) {
      onFinal();
    }
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setError(error: string) {
    this.error = error;
  }
}
