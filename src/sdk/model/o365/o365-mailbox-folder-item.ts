import { O365MailboxFolderItemJson } from './__json__/o365-mailbox-folder-item.json';

/**
 * O365 Exchange Mailbox Folder Item
 */
/* istanbul ignore next: autogenerated */
export class O365MailboxFolderItem {

  constructor(private _json: O365MailboxFolderItemJson) {
  }

  /**
   * Gets the id of the O365 Mailbox Folder item
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Gets the from of the O365 Mailbox Folder item
   */
  get from(): string {
    return this._json.from;
  }

  /**
   * Gets the cc of the O365 Mailbox Folder item
   */
  get cc(): string {
    return this._json.cc;
  }

  /**
   * Gets the bcc of the O365 Mailbox Folder item
   */
  get bcc(): string {
    return this._json.bcc;
  }

  /**
   * Gets the to of the O365 Mailbox Folder item
   */
  get to(): string {
    return this._json.to;
  }

  /**
   * Gets the sent date timestamp of the O365 Mailbox Folder item
   */
  get sentDate(): number {
    return this._json.sent;
  }

  /**
   * Gets the received date timestamp of the O365 Mailbox Folder item
   */
  get receivedDate(): number {
    return this._json.received;
  }

  /**
   * Is the O365 Mailbox Folder item a reminder
   */
  get isReminder(): boolean {
    return this._json.reminder;
  }

  /**
   * Gets the subject of the O365 Mailbox Folder item
   */
  get subject(): string {
    return this._json.subject;
  }

  /**
   * Gets the item class of the O365 Mailbox Folder item
   */
  get itemClass(): string {
    return this._json.item_class;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365MailboxFolderItemJson}
   */
  get json(): O365MailboxFolderItemJson {
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
