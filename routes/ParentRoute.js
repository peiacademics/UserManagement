module.exports = (app) => {
    const Parent = require('../controllers/Parent.controller.js');

    // Create a new Parent
    app.post('/Parent', Parent.create);

    // Retrieve all Parents
    app.get('/Parents', Parent.findAll);

    // Retrieve a single Parent with ParentId
    // app.get('/Parents/:ParentId', Users.findOne);

    // Update a Parent with ParentId
    app.put('/Parent/:ParentId', Parent.update);

    // Delete a Parent with ParentId
    app.delete('/Parent/:ParentId', Parent.delete);
}