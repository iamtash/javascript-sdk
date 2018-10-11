/* istanbul ignore next: autogenerated */
import { VmVnicRequestJson } from '../vm/__json__/vm-json';
import { TemplateVmConfigJson } from './__json__/template-vm-config-json';

export class TemplateVmConfig {

  constructor(private _json: TemplateVmConfigJson) {
  }

  /**
   * Get vm template uuid.
   * @returns {string}
   */
  get vmTemplateUuid(): string {
    return this._json.vm_template_uuid;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get computer name.
   * @returns {string}
   */
  get computerName(): string {
    return this._json.computer_name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get storage profile uuid.
   * @returns {string}
   */
  get storageProfileUuid(): string {
    return this._json.storage_profile_uuid;
  }

  /**
   * Get vnics.
   * @returns {Array<VmVnicRequestJson>}
   */
  get vnics(): Array<VmVnicRequestJson> {
    return this._json.vnics;
  }

  /**
   * Get the json representation of this class.
   * @returns {TemplateVmConfigJson}
   */
  get json(): TemplateVmConfigJson {
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