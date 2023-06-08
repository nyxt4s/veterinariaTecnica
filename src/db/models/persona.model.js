// CREATE TABLE persona(
// 	id INT GENERATED ALWAYS AS IDENTITY,
// 	nombre TEXT,	
// 	PRIMARY KEY(id)
// );   


const { Model, DataTypes }  = require('sequelize');

const persona_table = 'persona';

class Persona extends Model {
    static config(sequelize){
        return {
            sequelize, 
            tableName : persona_table,
            modelName : 'persona',
            timestamps : true
        }
    }
}

const personaSchema = {
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
        Persona,
        personaSchema
}