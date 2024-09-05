const { rawListeners } = require("../server");
const readDatabase = require("../utils");

// refer to database
const database = process.argv[2];

export default class StudentsController {

    static getAllStudents(req, res) {
        res.status(200);
        readDatabase;
        res.write('This is the list of our students');
    }

    static getAllStudentsbyMajor(req, res){
        res.status(200);
    }
}