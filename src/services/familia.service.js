const { models } = require("../libs/sequelize");

class FamiliaService {
    constructor () {

    }

    async find(){
        const res = await models.familia.findAll();
        return res;
    }

    async findOne (id){
        const res = await models.familia.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.familia.create(data);
        return res;
    }

    async update(id, data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    } 

    async delete (id){
        const model = await this.findOne(id);
        if (!model)   return { "operacion": "la familia del animal no existe" };
        await model.destroy();
        return { deleted: true };
    }
}

module.exports = FamiliaService;