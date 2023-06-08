const { models } = require("../libs/sequelize");

class MascotaService {
    constructor () {

    }

    async find(){
        const res = await models.mascota.findAll();
        return res;
    }

    async findOne (id){
        const res = await models.mascota.findByPk(id);
        return res;
    }

    async create(data){
        console.log('service data: ', data);
        const res = await models.mascota.create(data);
     
        return res;
    }

    async update(id, data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    } 

    async delete (id){
        const model = await this.findOne(id);
        if (!model)   return { "operacion": "la Mascota no existe" };
        await model.destroy();
        return { deleted: true };
    }
}

module.exports = MascotaService;