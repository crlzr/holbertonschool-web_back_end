// 8.4 Link the routes

const express = require('express');
const AppController = require('./AppController');
const StudentsController = require('./StudentsController');
const router = express.Router();

// route '/'
router.get('/', AppController.getHomepage);

// route '/students'
router.get('/students', StudentsController.getAllStudents);

// route '/students/:major' (corrected)
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;



