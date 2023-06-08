// CREATE TABLE mascota(
// 	id INT GENERATED ALWAYS AS IDENTITY,
// 	nombre_mascota TEXT,
// 	id_persona INTEGER notnull,
// 	id_raza INTEGER notnull,
// 	id_familia INTEGER notnull,
// 	PRIMARY KEY(id),
// 	foreign key (id_familia)
// 	references familia (id_familia),
// 	foreign key (id_persona)
// 	references persona(id_persona),
// 	foreign key (id_raza)
// 	references raza (id_raza),
// );



const { Model, DataTypes }  = require('sequelize');

const mascota_table = 'mascota';

class Mascota extends Model {
    static config(sequelize){
        return {
            sequelize, 
            tableName : mascota_table,
            modelName : 'mascota',
            timestamps : true
        }
    }
}

const mascotaSchema = {
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
    },
    id_raza: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_raza'
    },
    id_familia: {
        allowNull: false,
        type: DataTypes,
        field: 'id_familia'
    },
    id_persona: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_persona'
    }
}

module.exports = {
        Mascota,
        mascotaSchema
}