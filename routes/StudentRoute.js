module.exports = (app) => {
    const Students = require('../controllers/Student.controller.js');

    // Create a new Student
    app.post('/Student', Students.create);

    // Retrieve all Students
    app.get('/Students', Students.findAll);

    // Retrieve a single User with UserId
    // app.get('/Users/:UserId', Users.findOne);

    // Update a User with UserId
    app.put('/Students/:StudentId', Students.update);

    // Delete a User with UserId
    app.delete('/Students/:StudentId', Students.delete);
}