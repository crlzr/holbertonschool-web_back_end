const { rawListeners } = require("../server");
const readDatabase = require("../utils");

// refer to database
const database = process.argv[2];

class StudentsController {
  static getAllStudents(req, res) {
    try {
      // Call the readDatabase function
      readDatabase();

      res.status(200);
      res.write('This is the list of our students\n');
      res.write(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}\n`);
      res.write(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}\n`);
      res.end(); // End the response
    } catch (err) {
      res.status(500);
      res.end('Cannot load the database');
    }
  }

  static getAllStudentsbyMajor(req, res) {
    if (req.params.major == 'CS') {
      res.status(200);
      readDatabase();
      res.send(`List: ${CS.join(', ')}\n`);
    } else if (req.params.major == 'SWE') {
      res.send(`List: ${SWE.join(', ')}\n`);
    } else {
      res.status(500).
      res.end('Major parameter must be CS or SWE');
    }
    }
  }

module.exports = StudentsController;


