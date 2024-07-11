// Currency class definition
export default class Currency {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Method to display full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
