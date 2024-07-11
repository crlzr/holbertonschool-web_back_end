export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Setter

  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  toString() {
    return `${this.code}`;
  }
}
