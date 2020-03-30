import { SecurityGroupMemberOptionProperty } from './security-group-member-option-property';
import { SecurityGroupMemberOptionJson } from './__json__/security-group-member-option-json';

/**
 * Security Group Member Option
 */
/* istanbul ignore next: autogenerated */
export class SecurityGroupMemberOption {

  constructor(private _json: SecurityGroupMemberOptionJson) {
  }

  /**
   * Get type.
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get properties.
   * @returns {Array<SecurityGroupMemberOptionProperty>}
   */
  get properties(): Array<SecurityGroupMemberOptionProperty> {
    return this._json.properties.map(it => new SecurityGroupMemberOptionProperty(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityGroupMemberOptionJson}
   */
  get json(): SecurityGroupMemberOptionJson {
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
