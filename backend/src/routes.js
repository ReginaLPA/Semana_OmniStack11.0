const express = require('express');


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/Incidents',IncidentController.index); 
routes.post('/Incidents',IncidentController.create);
routes.delete('/Incidents/id', IncidentController.delete);
 

module.exports = routes; // para exportar alguma variavel no node


/* //tratamento de erro
const get = async () => {
    return Promise.reject('Oops!').catch(err => {
        throw new Error(err);
    });
};

get()
    .then(console.log)
    .catch(function (e) {
        console.log(e);
    });
*/