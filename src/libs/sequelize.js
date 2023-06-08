const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
const setupModels = require('../db/models/index.js')

const sequelize = new Sequelize (
    'veterinaria', //nombre bd
    'nyxth', //usuario
    'medina12', //contrasenia
    {
        host: 'postgresql-130841-0.cloudclusters.net',
        // host:config.dbHost,
        dialect: 'postgresql',
        port: '19905'
    }
);


sequelize.sync();

setupModels(sequelize);
module.exports = sequelize;

    