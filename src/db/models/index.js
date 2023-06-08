const { Raza, razaSchema } = require('../models/raza.models');
const { Familia, familiaSchema } = require('../models/familia.model');
const { Persona, personaSchema } = require('./persona.model');
const { Mascota, mascotaSchema } = require('./mascota.model');

function setupModels (sequelize){
    Raza.init(razaSchema, Raza.config(sequelize));
    Familia.init(familiaSchema, Familia.config(sequelize));
    Persona.init(personaSchema, Persona.config(sequelize));
    Mascota.init(mascotaSchema, Mascota.config(sequelize));

    Raza.hasOne(Mascota, {
        foreignKey: 'id_raza',
        sourceKey: 'id'
    })
    
    Mascota.belongsTo(Raza,{
        foreignKey: 'id_raza',
        target: 'id'
    })

    Familia.hasOne(Mascota, {
        foreignKey: 'id_familia',
        sourceKey: 'id'
    })
    
    Mascota.belongsTo(Familia,{
        foreignKey: 'id_familia',
        target: 'id'
    })

    Persona.hasOne(Mascota, {
        foreignKey: 'id_persona',
        sourceKey: 'id'
    })
    
    Mascota.belongsTo(Persona,{
        foreignKey: 'id_persona',
        target: 'id'
    })
}


module.exports = setupModels;