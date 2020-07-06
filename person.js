const express = require('express');
const app = express.Router();

const controller = require('../controllers');

app.get('/', controller.test);
app.get('/get-all', controller.getPersons);
app.get('/get-one/:id', controller.getPersonById);
app.post('/add', controller.createPerson);
app.put('/update/:id', controller.updatePerson);
app.delete('/delete/:id', controller.deletePerson);

module.exports = app;
