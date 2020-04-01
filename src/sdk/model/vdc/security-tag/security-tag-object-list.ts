import { SecurityTagObjectListJson } from './__json__/security-tag-object-list-json';
import { SecurityTagObject } from './security-tag-object';
import { SecurityTagObjectPagingParams } from './security-tag-object-paging-params';

/**
 * Security Group Tag Object List.
 */
/* istanbul ignore next: autogenerated */
export class SecurityTagObjectList {

  constructor(private _json: SecurityTagObjectListJson) {
  }

  /**
   * Get current page parameters.
   * @returns {SecurityTagObjectPagingParams}
   */
  get currentPageParameters(): SecurityTagObjectPagingParams {
    return new SecurityTagObjectPagingParams(this._json.current_page_parameters);
  }

  /**
   * Get next page parameters.
   * @returns {SecurityTagObjectPagingParams | null}
   */
  get nextPageParameters(): SecurityTagObjectPagingParams | null {
    return this._json.next_page_parameters ? new SecurityTagObjectPagingParams(this._json.next_page_parameters) : null;
  }

  /**
   * Get total records.
   * @returns {number}
   */
  get totalRecords(): number {
    return this._json.total_records;
  }

  /**
   * Get last page.
   * @returns {boolean}
   */
  get lastPage(): boolean {
    return this._json.last_page;
  }

  /**
   * Get data.
   * @returns {Array<SecurityTagObject>}
   */
  get data(): Array<SecurityTagObject> {
    return this._json.data.map(it => new SecurityTagObject(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityTagObjectListJson}
   */
  get json(): SecurityTagObjectListJson {
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