import { SecurityTagsJson } from './__json__/security-tags-json';
import { SecurityTag } from './security-tag';

/**
 * Security Tags.
 */
/* istanbul ignore next: autogenerated */
export class SecurityTags {

  constructor(private _json: SecurityTagsJson) {
  }

  /**
   * Get data.
   * @returns {Array<SecurityTag>}
   */
  get data(): Array<SecurityTag> {
    return this._json.data.map(it => new SecurityTag(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityTagsJson}
   */
  get json(): SecurityTagsJson {
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