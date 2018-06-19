import { EdgeSslVpnAuthServerType } from './__json__/edge-ssl-vpn-auth-server-type';
import { EdgeSslVpnLocalAuthenticationServerJson } from './__json__/edge-ssl-vpn-json';
import { EdgeSslVpnAuthenticationServer } from './edge-ssl-vpn-authentication-server';

/**
 * SslVpnLocalAuthenticationServer class
 */
/* istanbul ignore next: autogenerated */
export class EdgeSslVpnLocalAuthenticationServer extends EdgeSslVpnAuthenticationServer {

  constructor(protected _json: EdgeSslVpnLocalAuthenticationServerJson) {
    super(_json);
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get pwd min length.
   * @returns {number}
   */
  get pwdMinLength(): number {
    return this._json.pwd_min_length;
  }

  /**
   * Get pwd max length.
   * @returns {number}
   */
  get pwdMaxLength(): number {
    return this._json.pwd_max_length;
  }

  /**
   * Get pwd min alphabets.
   * @returns {number}
   */
  get pwdMinAlphabets(): number {
    return this._json.pwd_min_alphabets;
  }

  /**
   * Get pwd min digits.
   * @returns {number}
   */
  get pwdMinDigits(): number {
    return this._json.pwd_min_digits;
  }

  /**
   * Get pwd min special characters.
   * @returns {number}
   */
  get pwdMinSpecialCharacters(): number {
    return this._json.pwd_min_special_characters;
  }

  /**
   * Get allow user id within pwd.
   * @returns {boolean}
   */
  get allowUserIdWithinPwd(): boolean {
    return this._json.allow_user_id_within_pwd;
  }

  /**
   * Get pwd lifetime.
   * @returns {number}
   */
  get pwdLifetime(): number {
    return this._json.pwd_lifetime;
  }

  /**
   * Get pwd expiry notification.
   * @returns {number}
   */
  get pwdExpiryNotification(): number {
    return this._json.pwd_expiry_notification;
  }

  /**
   * Get retry count.
   * @returns {number}
   */
  get retryCount(): number {
    return this._json.retry_count;
  }

  /**
   * Get retry duration.
   * @returns {number}
   */
  get retryDuration(): number {
    return this._json.retry_duration;
  }

  /**
   * Get lockout duration.
   * @returns {number}
   */
  get lockoutDuration(): number {
    return this._json.lockout_duration;
  }

  /**
   * Get type.
   * @returns {EdgeSslVpnAuthServerType}
   */
  get type(): EdgeSslVpnAuthServerType {
    return this._json.type;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnLocalAuthenticationServerJson}
   */
  get json(): EdgeSslVpnLocalAuthenticationServerJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
