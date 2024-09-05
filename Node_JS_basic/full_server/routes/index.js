// 8.4 Link the routes

const express = require('express')
const AppController = require('./AppController');
const StudentsController = require('./Studentscontroller');
const router = express.Router()

// route '/'
router.get('/', AppController.getHomepage);

// route '/students'
router.get('/students', StudentsController.getAllStudents);

// route '/students:major'
router.get('/students:major', StudentsController.getAllStudentsbyMajor);

module.exports = router;

