
  class HolbertonCourse {
    constructor(name, length, students) {
      this._name = name;
      this._length = length;
      this._students = students;
    }

    // Getter for name
    get name() {
      return this._name;
    }

    // Setter for name with type check
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }

    // Getter for length
    get length() {
      return this._length;
    }

    // Setter for length with type check
    set length(newLength) {
      if (typeof newLength !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = newLength;
    }

    // Getter for students
    get students() {
      return this._students;
    }

    // Setter for students with type check
    set students(newStudents) {
      if (!Array.isArray(newStudents)) {
        throw new TypeError('Students must be an array of strings');
      }

      for (let i = 0; i < newStudents.length; i++) {
        if (typeof newStudents[i] !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }

      this._students = newStudents;
    }

  }

  export default HolbertonCourse;
