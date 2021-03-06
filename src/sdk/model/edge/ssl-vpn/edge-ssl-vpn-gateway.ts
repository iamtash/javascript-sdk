import { EdgeSslVpnGatewayJson } from './__json__/edge-ssl-vpn-json';

/**
 * EdgeSslVpnGateway class
 */
/* istanbul ignore next: autogenerated */
export class EdgeSslVpnGateway {

  constructor(private _json: EdgeSslVpnGatewayJson) {
  }

  /**
   * Get host name.
   * @returns {string}
   */
  get hostName(): string {
    return this._json.host_name;
  }

  /**
   * Get port.
   * @returns {string}
   */
  get port(): string {
    return this._json.port;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnGatewayJson}
   */
  get json(): EdgeSslVpnGatewayJson {
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
