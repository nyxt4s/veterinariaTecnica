// CREATE TABLE familia(
// 	id INT GENERATED ALWAYS AS IDENTITY,
// 	nombre TEXT,
// 	PRIMARY KEY(id)
// );

const { Model, DataTypes }  = require('sequelize');

const familia_table = 'familia';

class Familia extends Model {
    static config(sequelize){
        return {
            sequelize, 
            tableName : familia_table,
            modelName : 'familia',
            timestamps : true
        }
    }
}

const familiaSchema = {
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
        Familia,
        familiaSchema
}