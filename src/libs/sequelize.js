const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
const setupModels = require('../db/models/index.js')

const sequelize = new Sequelize (
    'veterinaria', //nombre bd
    'postgres', //usuario
    'medina12', //contrasenia
    {
        host:config.dbHost,
        dialect: 'postgresql'
    }
);


sequelize.sync();

setupModels(sequelize);
module.exports = sequelize;

    