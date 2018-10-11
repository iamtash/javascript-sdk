import { NessusScanOptOutCreateRequestJson } from './__json__/nessus-scan-opt-out-create-request-json';

/**
 * Nessus Scan Opt Out Create Request.
 */
/* istanbul ignore next: autogenerated */
export class NessusScanOptOutCreateRequest {

  private readonly _json: NessusScanOptOutCreateRequestJson;

  constructor(nessusScanOptOutCreateRequest: NessusScanOptOutCreateRequest);
  constructor(nessusScanOptOutCreateRequestJson: NessusScanOptOutCreateRequestJson);
  constructor(optOut: boolean, exclusions: Array<string>);
  constructor(firstParam: boolean | NessusScanOptOutCreateRequest | NessusScanOptOutCreateRequestJson,
              exclusions?: Array<string>) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        opt_out: firstParam,
        exclusions: exclusions
      } as NessusScanOptOutCreateRequestJson;
    } else if (firstParam instanceof NessusScanOptOutCreateRequest) {
      // Copy constructor
      this._json = (firstParam as NessusScanOptOutCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as NessusScanOptOutCreateRequestJson;
    }
  }

  /**
   * Get opt out.
   * @returns {boolean}
   */
  get optOut(): boolean {
    return this._json.opt_out;
  }

  /**
   * Get exclusions.
   * @returns {Array<string>}
   */
  get exclusions(): Array<string> {
    return this._json.exclusions;
  }

  /**
   * Get the json representation of this class.
   * @returns {NessusScanOptOutCreateRequestJson}
   */
  get json(): NessusScanOptOutCreateRequestJson {
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