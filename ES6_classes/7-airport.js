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

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
