import { EdgeGatewayIpsecSiteJson } from './__json__/edge-gateway-ipsec-site-json';
import { EdgeGatewayIpsecComplianceSuiteType } from './edge-gateway-ipsec-compliance-suite-type';
import { EdgeGatewayIpsecDigestAlgorithmType } from './edge-gateway-ipsec-digest-algorithm-type';
import { EdgeGatewayIpsecEncryptionAlgorithmType } from './edge-gateway-ipsec-encryption-algorithm-type';
import { EdgeGatewayIpsecIkeOptionType } from './edge-gateway-ipsec-ike-option-type';
import { EdgeGatewayIPsecSessionType } from './edge-gateway-ipsec-session-type';
import { EdgeGatewayIpsecTunnelInterface } from './edge-gateway-ipsec-tunnel-interface';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayIpsecSite {

  constructor(private _json: EdgeGatewayIpsecSiteJson) {
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get local id.
   * @returns {string}
   */
  get localId(): string {
    return this._json.local_id;
  }

  /**
   * Get local ip.
   * @returns {string}
   */
  get localIp(): string {
    return this._json.local_ip;
  }

  /**
   * Get peer id.
   * @returns {string}
   */
  get peerId(): string {
    return this._json.peer_id;
  }

  /**
   * Get peer ip.
   * @returns {string}
   */
  get peerIp(): string {
    return this._json.peer_ip;
  }

  /**
   * Get ipsec session type.
   * @returns {EdgeGatewayIPsecSessionType}
   */
  get ipsecSessionType(): EdgeGatewayIPsecSessionType {
    return this._json.ipsec_session_type;
  }

  /**
   * Get compliance suite.
   * @returns {EdgeGatewayIpsecComplianceSuiteType}
   */
  get complianceSuite(): EdgeGatewayIpsecComplianceSuiteType {
    return this._json.compliance_suite;
  }

  /**
   * Get encryption algorithm.
   * @returns {EdgeGatewayIpsecEncryptionAlgorithmType}
   */
  get encryptionAlgorithm(): EdgeGatewayIpsecEncryptionAlgorithmType {
    return this._json.encryption_algorithm;
  }

  /**
   * Get enable pfs.
   * @returns {boolean}
   */
  get enablePfs(): boolean {
    return this._json.enable_pfs;
  }

  /**
   * Get dh group.
   * @returns {string}
   */
  get dhGroup(): string {
    return this._json.dh_group;
  }

  /**
   * Get local subnets.
   * @returns {Array<string>}
   */
  get localSubnets(): Array<string> {
    return this._json.local_subnets;
  }

  /**
   * Get peer subnets.
   * @returns {Array<string>}
   */
  get peerSubnets(): Array<string> {
    return this._json.peer_subnets;
  }

  /**
   * Get psk.
   * @returns {string}
   */
  get psk(): string {
    return this._json.psk;
  }

  /**
   * Get authentication mode.
   * @returns {string}
   */
  get authenticationMode(): string {
    return this._json.authentication_mode;
  }

  /**
   * Get extension.
   * @returns {string}
   */
  get extension(): string {
    return this._json.extension;
  }

  /**
   * Get ike option.
   * @returns {EdgeGatewayIpsecIkeOptionType}
   */
  get ikeOption(): EdgeGatewayIpsecIkeOptionType {
    return this._json.ike_option;
  }

  /**
   * Get digest algorithm.
   * @returns {EdgeGatewayIpsecDigestAlgorithmType}
   */
  get digestAlgorithm(): EdgeGatewayIpsecDigestAlgorithmType {
    return this._json.digest_algorithm;
  }

  /**
   * Get responder only.
   * @returns {boolean}
   */
  get responderOnly(): boolean {
    return this._json.responder_only;
  }

  /**
   * Get tunnel interface.
   * @returns {EdgeGatewayIpsecTunnelInterface}
   */
  get tunnelInterface(): EdgeGatewayIpsecTunnelInterface {
    return new EdgeGatewayIpsecTunnelInterface(this._json.tunnel_interface);
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayIpsecSiteJson}
   */
  get json(): EdgeGatewayIpsecSiteJson {
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
