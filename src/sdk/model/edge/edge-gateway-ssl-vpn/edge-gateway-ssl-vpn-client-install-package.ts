import { EdgeGatewaySslVpnClientInstallPackageJson } from './__json__/edge-gateway-ssl-vpn-client-install-package-json';
import { EdgeGatewaySslVpnGateway } from './edge-gateway-ssl-vpn-gateway';

/* istanbul ignore next: autogenerated */
export class EdgeGatewaySslVpnClientInstallPackage {

  constructor(private _json: EdgeGatewaySslVpnClientInstallPackageJson) {
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get profile name.
   * @returns {string}
   */
  get profileName(): string {
    return this._json.profile_name;
  }

  /**
   * Get gateway list.
   * @returns {Array<EdgeGatewaySslVpnGateway>}
   */
  get gatewayList(): Array<EdgeGatewaySslVpnGateway> {
    return this._json.gateway_list.map(it => new EdgeGatewaySslVpnGateway(it));
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get create linux client.
   * @returns {boolean}
   */
  get createLinuxClient(): boolean {
    return this._json.create_linux_client;
  }

  /**
   * Get create mac client.
   * @returns {boolean}
   */
  get createMacClient(): boolean {
    return this._json.create_mac_client;
  }

  /**
   * Get start client on logon.
   * @returns {boolean}
   */
  get startClientOnLogon(): boolean {
    return this._json.start_client_on_logon;
  }

  /**
   * Get hide systray icon.
   * @returns {boolean}
   */
  get hideSystrayIcon(): boolean {
    return this._json.hide_systray_icon;
  }

  /**
   * Get remember password.
   * @returns {boolean}
   */
  get rememberPassword(): boolean {
    return this._json.remember_password;
  }

  /**
   * Get silent mode operation.
   * @returns {boolean}
   */
  get silentModeOperation(): boolean {
    return this._json.silent_mode_operation;
  }

  /**
   * Get silent mode installation.
   * @returns {boolean}
   */
  get silentModeInstallation(): boolean {
    return this._json.silent_mode_installation;
  }

  /**
   * Get hide network adaptor.
   * @returns {boolean}
   */
  get hideNetworkAdaptor(): boolean {
    return this._json.hide_network_adaptor;
  }

  /**
   * Get create desktop icon.
   * @returns {boolean}
   */
  get createDesktopIcon(): boolean {
    return this._json.create_desktop_icon;
  }

  /**
   * Get enforce server security cert validation.
   * @returns {boolean}
   */
  get enforceServerSecurityCertValidation(): boolean {
    return this._json.enforce_server_security_cert_validation;
  }

  /**
   * Get disconnect on cert validation failure.
   * @returns {boolean}
   */
  get disconnectOnCertValidationFailure(): boolean {
    return this._json.disconnect_on_cert_validation_failure;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewaySslVpnClientInstallPackageJson}
   */
  get json(): EdgeGatewaySslVpnClientInstallPackageJson {
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
