import { IpScope } from './ip-scope';
import { IpScopeJson } from './__json__/ip-scope-json';
import { OrgVdcNetworkCreateRequestJson } from './__json__/org-vdc-network-create-request-json';
import { FenceModeType } from '../common/__json__/fence-mode-type';

/**
 * Org vDC Network Create Request.
 */
/* istanbul ignore next: autogenerated */
export class OrgVdcNetworkCreateRequest {

  private readonly _json: OrgVdcNetworkCreateRequestJson;

  constructor(orgVdcNetworkRequest: OrgVdcNetworkCreateRequest);
  constructor(orgVdcNetworkRequestJson: OrgVdcNetworkCreateRequestJson);
  constructor(name: string, description: string, edgeUuid: string, shared: boolean,
              fenceMode: FenceModeType, ipScope: IpScopeJson, retainNetInfoAcrossDeployments: boolean,
              subInterface: boolean, distributedInterface: boolean, guestVlanAllowed: boolean);
  constructor(firstParam: string | OrgVdcNetworkCreateRequest | OrgVdcNetworkCreateRequestJson,
              description?: string, edgeUuid?: string, shared?: boolean, fenceMode?: FenceModeType,
              ipScope?: IpScopeJson, retainNetInfoAcrossDeployments?: boolean, subInterface?: boolean,
              distributedInterface?: boolean, guestVlanAllowed?: boolean) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam,
        description: description,
        edge_uuid: edgeUuid,
        shared: shared,
        fence_mode: fenceMode,
        ip_scope: ipScope,
        retain_net_info_across_deployments: retainNetInfoAcrossDeployments,
        sub_interface: subInterface,
        distributed_interface: distributedInterface,
        guest_vlan_allowed: guestVlanAllowed
      } as OrgVdcNetworkCreateRequestJson;
    } else if (firstParam instanceof OrgVdcNetworkCreateRequest) {
      // Copy constructor
      this._json = (firstParam as OrgVdcNetworkCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as OrgVdcNetworkCreateRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get edge uuid.
   * @returns {string}
   */
  get edgeUuid(): string {
    return this._json.edge_uuid;
  }

  /**
   * Get shared.
   * @returns {boolean}
   */
  get shared(): boolean {
    return this._json.shared;
  }

  /**
   * Get fence mode.
   * @returns {FenceModeType}
   */
  get fenceMode(): FenceModeType {
    return this._json.fence_mode;
  }

  /**
   * Get ip scope.
   * @returns {IpScope}
   */
  get ipScope(): IpScope {
    return new IpScope(this._json.ip_scope);
  }

  /**
   * Get retain net info across deployments.
   * @returns {boolean}
   */
  get retainNetInfoAcrossDeployments(): boolean {
    return this._json.retain_net_info_across_deployments;
  }

  /**
   * Get sub interface.
   * @returns {boolean}
   */
  get subInterface(): boolean {
    return this._json.sub_interface;
  }

  /**
   * Get distributed interface.
   * @returns {boolean}
   */
  get distributedInterface(): boolean {
    return this._json.distributed_interface;
  }

  /**
   * Get guest vlan allowed.
   * @returns {boolean}
   */
  get guestVlanAllowed(): boolean {
    return this._json.guest_vlan_allowed;
  }

  /**
   * Get the json representation of this class.
   * @returns {OrgVdcNetworkCreateRequestJson}
   */
  get json(): OrgVdcNetworkCreateRequestJson {
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
