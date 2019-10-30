module.exports = (app) => {
    const Experts = require('../controllers/expert.controller.js');

    // Create a new Expert
    app.post('/Expert', Experts.create);

    // Retrieve all Users
    app.get('/Experts', Experts.findAll);

    // Retrieve a single Expert with ExpertId
    // app.get('/Experts/:ExpertId', Experts.findOne);

    // Update a Expert with ExpertId
    app.put('/Experts/:ExpertId', Experts.update);

    // Delete a Expert with ExpertId
    app.delete('/Experts/:ExpertId', Experts.delete);
}