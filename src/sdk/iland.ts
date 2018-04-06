import { AuthProvider } from './auth/';
import { Http } from './http';
import { BasicConfiguration } from './basic-configuration';

const DEFAULT_API_URL = `${BasicConfiguration.getApiUrl()}/v1`;

export abstract class Iland {

  private static _authProvider: AuthProvider|undefined;

  private static _http: Http|undefined;

  static init(_authProvider: AuthProvider, _config?: IlandSdkConfig) {
    this._authProvider = _authProvider;
    const baseUrl = _config !== undefined && _config.baseUrl ? _config.baseUrl : DEFAULT_API_URL;
    this._http = new Http(baseUrl);
  }

  static getAuthProvider(): AuthProvider {
    if (Iland._authProvider === undefined) {
      throw new Error('The Iland SDK has not yet been initialized.');
    }
    return Iland._authProvider;
  }

  static getHttp(): Http {
    if (Iland._http === undefined) {
      throw new Error('The Iland SDK has not yet been initialized.');
    }
    return Iland._http;
  }

}

export interface IlandSdkConfig {

  baseUrl: string;

}