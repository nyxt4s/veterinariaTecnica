const { models } = require("../libs/sequelize");

class RazaService {
    constructor () {

    }

    async find(){
        const res = await models.raza.findAll();
        return res;
    }

    async findOne (id){
        const res = await models.raza.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.raza.create(data);
        return res;
    }

    async update(id, data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    } 

    async delete (id){
        const model = await this.findOne(id);
        if (!model)   return { "operacion": "la raza no existe" };
        await model.destroy();
        return { deleted: true };
    }
}

module.exports = RazaService;