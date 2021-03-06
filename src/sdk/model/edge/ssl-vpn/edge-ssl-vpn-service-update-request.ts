import {
  EdgeSslVpnClientInstallPackageUpdateRequestJson
} from './__json__/edge-ssl-vpn-client-install-package-update-request-json';
import { EdgeSslVpnIpPoolUpdateRequestJson } from './__json__/edge-ssl-vpn-ip-pool-update-request-json';
import {
  EdgeSslVpnLocalAuthenticationServerUpdateRequestJson
} from './__json__/edge-ssl-vpn-local-authentication-server-update-request-json';
import { EdgeSslVpnPrivateNetworkUpdateRequestJson } from './__json__/edge-ssl-vpn-private-network-update-request-json';
import { EdgeSslVpnServiceUpdateRequestJson } from './__json__/edge-ssl-vpn-service-update-request-json';
import { EdgeSslVpnUserUpdateRequestJson } from './__json__/edge-ssl-vpn-user-update-request-json';
import { EdgeSslVpnAuthenticationUpdateRequestJson } from './__json__/edge-ssl-vpn-authentication-update-request-json';
import { EdgeSslVpnClientInstallPackageUpdateRequest } from './edge-ssl-vpn-client-install-package-update-request';
import { EdgeSslVpnIpPoolUpdateRequest } from './edge-ssl-vpn-ip-pool-update-request';
import {
  EdgeSslVpnLocalAuthenticationServerUpdateRequest
} from './edge-ssl-vpn-local-authentication-server-update-request';
import { EdgeSslVpnPrivateNetworkUpdateRequest } from './edge-ssl-vpn-private-network-update-request';
import { EdgeSslVpnUserUpdateRequest } from './edge-ssl-vpn-user-update-request';
import { EdgeSslVpnAuthenticationUpdateRequest } from './edge-ssl-vpn-authentication-update-request';

/* istanbul ignore next: autogenerated */
export class EdgeSslVpnServiceUpdateRequest {

  private readonly _json: EdgeSslVpnServiceUpdateRequestJson;

  constructor(edgeSslVpnServiceUpdateRequest: EdgeSslVpnServiceUpdateRequest);
  constructor(edgeSslVpnServiceUpdateRequestJson: EdgeSslVpnServiceUpdateRequestJson);
  constructor(edgeUuid: string, enabled: boolean, logEnabled: boolean, logLevel: string, ip: string, port: number,
              cipherList: Array<string>, privateNetworks: Array<EdgeSslVpnPrivateNetworkUpdateRequestJson>,
              users: Array<EdgeSslVpnUserUpdateRequestJson>, ipPools: Array<EdgeSslVpnIpPoolUpdateRequestJson>,
              installPackages: Array<EdgeSslVpnClientInstallPackageUpdateRequestJson>,
              authenticationConfig: EdgeSslVpnLocalAuthenticationServerUpdateRequestJson,
              authentication: EdgeSslVpnAuthenticationUpdateRequestJson);
  constructor(firstParam: string | EdgeSslVpnServiceUpdateRequest | EdgeSslVpnServiceUpdateRequestJson,
              enabled?: boolean, logEnabled?: boolean, logLevel?: string, ip?: string, port?: number,
              cipherList?: Array<string>, privateNetworks?: Array<EdgeSslVpnPrivateNetworkUpdateRequestJson>,
              users?: Array<EdgeSslVpnUserUpdateRequestJson>, ipPools?: Array<EdgeSslVpnIpPoolUpdateRequestJson>,
              installPackages?: Array<EdgeSslVpnClientInstallPackageUpdateRequestJson>,
              authenticationConfig?: EdgeSslVpnLocalAuthenticationServerUpdateRequestJson,
              authentication?: EdgeSslVpnAuthenticationUpdateRequestJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        edge_uuid: firstParam,
        enabled: enabled,
        log_enabled: logEnabled,
        log_level: logLevel,
        ip: ip,
        port: port,
        cipher_list: cipherList,
        private_networks: privateNetworks,
        users: users,
        ip_pools: ipPools,
        install_packages: installPackages,
        authentication_config: authenticationConfig,
        authentication: authentication
      } as EdgeSslVpnServiceUpdateRequestJson;
    } else if (firstParam instanceof EdgeSslVpnServiceUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as EdgeSslVpnServiceUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as EdgeSslVpnServiceUpdateRequestJson;
    }
  }

  /**
   * Get edge uuid.
   * @returns {string}
   */
  get edgeUuid(): string {
    return this._json.edge_uuid;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get log enabled.
   * @returns {boolean}
   */
  get logEnabled(): boolean {
    return this._json.log_enabled;
  }

  /**
   * Get log level.
   * @returns {string}
   */
  get logLevel(): string {
    return this._json.log_level;
  }

  /**
   * Get ip.
   * @returns {string}
   */
  get ip(): string {
    return this._json.ip;
  }

  /**
   * Get port.
   * @returns {number}
   */
  get port(): number {
    return this._json.port;
  }

  /**
   * Get cipher list.
   * @returns {Array<string>}
   */
  get cipherList(): Array<string> {
    return this._json.cipher_list;
  }

  /**
   * Get private networks.
   * @returns {Array<EdgeSslVpnPrivateNetworkUpdateRequest>}
   */
  get privateNetworks(): Array<EdgeSslVpnPrivateNetworkUpdateRequest> {
    return this._json.private_networks.map((req) => new EdgeSslVpnPrivateNetworkUpdateRequest(req));
  }

  /**
   * Get users.
   * @returns {Array<EdgeSslVpnUserUpdateRequest>}
   */
  get users(): Array<EdgeSslVpnUserUpdateRequest> {
    return this._json.users.map((req) => new EdgeSslVpnUserUpdateRequest(req));
  }

  /**
   * Get ip pools.
   * @returns {Array<EdgeSslVpnIpPoolUpdateRequest>}
   */
  get ipPools(): Array<EdgeSslVpnIpPoolUpdateRequest> {
    return this._json.ip_pools.map((req) => new EdgeSslVpnIpPoolUpdateRequest(req));
  }

  /**
   * Get install packages.
   * @returns {Array<EdgeSslVpnClientInstallPackageUpdateRequest>}
   */
  get installPackages(): Array<EdgeSslVpnClientInstallPackageUpdateRequest> {
    return this._json.install_packages.map((req) => new EdgeSslVpnClientInstallPackageUpdateRequest(req));
  }

  /**
   * Get authentication config.
   * @returns {EdgeSslVpnLocalAuthenticationServerUpdateRequest}
   */
  get authenticationConfig(): EdgeSslVpnLocalAuthenticationServerUpdateRequest {
    return new EdgeSslVpnLocalAuthenticationServerUpdateRequest(this._json.authentication_config);
  }

  /**
   * Get authentication.
   * @returns {EdgeSslVpnAuthenticationUpdateRequest}
   */
  get authentication(): EdgeSslVpnAuthenticationUpdateRequest {
    return new EdgeSslVpnAuthenticationUpdateRequest(this._json.authentication);
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnServiceUpdateRequestJson}
   */
  get json(): EdgeSslVpnServiceUpdateRequestJson {
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
