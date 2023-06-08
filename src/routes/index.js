const express = require("express");
const razaRouter = require('./raza.route');
// const personaRouter = require('./persona.route');
const familiaRouter = require('./familia.route');


function routerApi (app) {
    const router = express.Router();
    app.use('api/v1', router);
    router.use('/raza', razaRouter);
    router.use('/familia', familiaRouter);
    router.use('/Persona', PersonaRouter);
}

module.exports = routerApi