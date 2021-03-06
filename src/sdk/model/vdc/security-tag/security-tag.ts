import { SecurityTagJson } from './__json__/security-tag-json';

/**
 * Security Tag.
 */
/* istanbul ignore next: autogenerated */
export class SecurityTag {

  constructor(private _json: SecurityTagJson) {
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
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
   * Get is temporal.
   * @returns {boolean}
   */
  get isTemporal(): boolean {
    return this._json.is_temporal;
  }

  /**
   * Get vm count.
   * @returns {number}
   */
  get vmCount(): number {
    return this._json.vm_count;
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityTagJson}
   */
  get json(): SecurityTagJson {
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
