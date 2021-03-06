import { RestoreNATRequestJson } from './__json__/restore-nat-request-json';

/**
 * Restore NAT Request.
 */
/* istanbul ignore next: autogenerated */
export class RestoreNATRequest {

  private readonly _json: RestoreNATRequestJson;

  constructor(restoreNatRequest: RestoreNATRequest);
  constructor(restoreNatRequestJson: RestoreNATRequestJson);
  constructor(restorePointTime: number);
  constructor(firstParam: number | Date | RestoreNATRequest | RestoreNATRequestJson) {
    if (typeof firstParam === 'number') {
      // Parameters constructor
      this._json = {
        restore_point_time: firstParam
      } as RestoreNATRequestJson;
    } else if (firstParam instanceof Date) {
      this._json = {
        restore_point_time: firstParam.getTime()
      } as RestoreNATRequestJson;
    } else if (firstParam instanceof RestoreNATRequest) {
      // Copy constructor
      this._json = (firstParam as RestoreNATRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as RestoreNATRequestJson;
    }
  }

  /**
   * Get restore point time.
   * @returns {number}
   */
  get restorePointTime(): Date {
    return new Date(this._json.restore_point_time);
  }

  /**
   * Get the json representation of this class.
   * @returns {RestoreNATRequestJson}
   */
  get json(): RestoreNATRequestJson {
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
