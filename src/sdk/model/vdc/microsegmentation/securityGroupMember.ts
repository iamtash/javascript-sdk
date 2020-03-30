import { SecurityGroupMemberJson } from './__json__/security-group-member-json';

/**
 * Security Group Member.
 */
/* istanbul ignore next: autogenerated */
export class SecurityGroupMember {

  constructor(private _json: SecurityGroupMemberJson) {
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
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
   * Get is temporal.
   * @returns {boolean}
   */
  get isTemporal(): boolean {
    return this._json.is_temporal;
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityGroupMemberJson}
   */
  get json(): SecurityGroupMemberJson {
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
