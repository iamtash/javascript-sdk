import { MessageFolder } from './__json__/message-folder';
import { InboxMessageJson } from './__json__/inbox-message-json';

/**
 * Inbox Message.
 */
/* istanbul ignore next: autogenerated */
export class InboxMessage {

  constructor(private _json: InboxMessageJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get subject.
   * @returns {string}
   */
  get subject(): string {
    return this._json.subject;
  }

  /**
   * Get content.
   * @returns {string}
   */
  get content(): string {
    return this._json.content;
  }

  /**
   * Get hash.
   * @returns {string}
   */
  get hash(): string {
    return this._json.hash;
  }

  /**
   * Get folder.
   * @returns {MessageFolder}
   */
  get folder(): MessageFolder {
    return this._json.folder;
  }

  /**
   * Get read.
   * @returns {boolean}
   */
  get read(): boolean {
    return this._json.read;
  }

  /**
   * Get time.
   * @returns {number}
   */
  get time(): number {
    return this._json.time;
  }

  /**
   * Get username.
   * @returns {string}
   */
  get username(): string {
    return this._json.username;
  }

  /**
   * Get the json representation of this class.
   * @returns {InboxMessageJson}
   */
  get json(): InboxMessageJson {
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