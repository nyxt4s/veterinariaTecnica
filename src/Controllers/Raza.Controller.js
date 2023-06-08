const RazaService = require("../services/raza.service");
const service = new RazaService();

const create = async (req, res) => {
    try {
        const response = await service.create(req.body);
        res.json({ sucess: true,  data: response });
    }catch(error){
        res.status(500).send({sucess: false, message: error.message});
    }
}

const get = async (req, res) => {
    try {
        const response = await service.find();
        res.json({ sucess: true,  data: response });
    }catch(error){
        res.status(500).send({sucess: false, message: error.message});
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json({ sucess: true,  data: { "id": response.id,  "nombre": response.nombre} });
    }catch(error){
        res.status(500).send({sucess: false, message: error.message});
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id, body);
        res.json({ sucess: true,  data: { "id": response.id,  "nombre": response.nombre}});
    }catch(error){
        res.status(500).send({sucess: false, message: error.message});
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.delete(id);
        res.json({ sucess: true,  data: response });
    }catch(error){
        res.status(500).send({sucess: false, message: error.message});
    }
}

module.exports = {
    create, get, getById, _delete, update
};