const { models } = require("../libs/sequelize");

class PersonaService {
    constructor () {

    }

    async find(){
        const res = await models.persona.findAll();
        return res;
    }

    async findOne (id){
        const res = await models.persona.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.persona.create(data);
        return res;
    }

    async update(id, data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    } 

    async delete (id){
        const model = await this.findOne(id);
        if (!model)   return { "operacion": "la persona no existe" };
        await model.destroy();
        return { deleted: true };
    }
}

module.exports = PersonaService;