const { Model, DataTypes }  = require('sequelize');
const Mascota = require('./mascota.model');
const raza_table = 'raza';

class Raza extends Model {
    static config(sequelize){
        return {
            sequelize, 
            tableName : raza_table,
            modelName : 'raza',
            timestamps : true
        }
    }
}
const razaSchema = {
    id: {
        allowNull : false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    } 
}

module.exports = {
        Raza,
        razaSchema
}