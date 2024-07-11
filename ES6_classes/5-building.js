export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter and setter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  // Abstract method for evacuationWarningMessage
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }
}