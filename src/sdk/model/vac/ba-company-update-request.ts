import { BaCompanyUpdateRequestJson } from './__json__/ba-company-update-request';

/* istanbul ignore next: autogenerated */
export class BaCompanyUpdateRequest {

  private readonly _json: BaCompanyUpdateRequestJson;

  constructor(baCompanyUpdateRequest: BaCompanyUpdateRequest);
  constructor(baCompanyUpdateRequestJson: BaCompanyUpdateRequestJson);
  constructor(name: string);
  constructor(firstParam: string | BaCompanyUpdateRequest | BaCompanyUpdateRequestJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam
      } as BaCompanyUpdateRequestJson;
    } else if (firstParam instanceof BaCompanyUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as BaCompanyUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as BaCompanyUpdateRequestJson;
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
   * Get the json representation of this class.
   * @returns {BaCompanyUpdateRequestJson}
   */
  get json(): BaCompanyUpdateRequestJson {
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
