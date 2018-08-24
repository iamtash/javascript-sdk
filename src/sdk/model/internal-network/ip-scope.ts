import { IpScopeJson } from './__json__/ip-scope-json';
import { IpRangeJson } from '../common/ip-range/__json__/ip-range-json';
import { IpRange } from '../common/ip-range/ip-range';
import { NetworkSubAllocationJson } from '../common/__json__/network-sub-allocation-json';
import { NetworkSubAllocation } from '../common/network-sub-allocation';

/**
 * Ip Scope.
 */
/* istanbul ignore next: autogenerated */
export class IpScope {

  private readonly _json: IpScopeJson;

  constructor(IpScope: IpScope);
  constructor(IpScopeJson: IpScopeJson);
  constructor(inherited: boolean, enabled: boolean, gateway: string, netmask: string, primaryDns: string,
              secondaryDns: string, dnsSuffix: string, ipRanges: Array<IpRangeJson>,
              allocatedIpAddresses: Array<string>, subAllocations: Array<NetworkSubAllocationJson>);
  constructor(firstParam: boolean | IpScope | IpScopeJson, enabled?: boolean, gateway?: string,
              netmask?: string, primaryDns?: string, secondaryDns?: string, dnsSuffix?: string,
              ipRanges?: Array<IpRangeJson>, allocatedIpAddresses?: Array<string>,
              subAllocations?: Array<NetworkSubAllocationJson>) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        inherited: firstParam,
        enabled: enabled,
        gateway: gateway,
        netmask: netmask,
        primary_dns: primaryDns,
        secondary_dns: secondaryDns,
        dns_suffix: dnsSuffix,
        ip_ranges: ipRanges,
        allocated_ip_addresses: allocatedIpAddresses,
        sub_allocations: subAllocations
      } as IpScopeJson;
    } else if (firstParam instanceof IpScope) {
      // Copy constructor
      this._json = (firstParam as IpScope).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as IpScopeJson;
    }
  }

  /**
   * Get inherited.
   * @returns {boolean}
   */
  get inherited(): boolean {
    return this._json.inherited;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get gateway.
   * @returns {string}
   */
  get gateway(): string {
    return this._json.gateway;
  }

  /**
   * Get netmask.
   * @returns {string}
   */
  get netmask(): string {
    return this._json.netmask;
  }

  /**
   * Get primary dns.
   * @returns {string}
   */
  get primaryDns(): string {
    return this._json.primary_dns;
  }

  /**
   * Get secondary dns.
   * @returns {string}
   */
  get secondaryDns(): string {
    return this._json.secondary_dns;
  }

  /**
   * Get dns suffix.
   * @returns {string}
   */
  get dnsSuffix(): string {
    return this._json.dns_suffix;
  }

  /**
   * Get ip ranges.
   * @returns {Array<IpRange>}
   */
  get ipRanges(): Array<IpRange> {
    return this._json.ip_ranges.map(it => new IpRange(it));
  }

  /**
   * Get allocated ip addresses.
   * @returns {Array<string>}
   */
  get allocatedIpAddresses(): Array<string> {
    return this._json.allocated_ip_addresses;
  }

  /**
   * Get sub allocations.
   * @returns {Array<NetworkSubAllocation>}
   */
  get subAllocations(): Array<NetworkSubAllocation> {
    return this._json.sub_allocations.map(it => new NetworkSubAllocation(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {IpScopeJson}
   */
  get json(): IpScopeJson {
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