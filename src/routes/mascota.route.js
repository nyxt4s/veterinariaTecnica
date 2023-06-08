const express = require("express") 
const MascotaController = require("../Controllers/Mascota.Controller.js");

const router = express.Router();

router.get('/', MascotaController.get)
router.get('/:id', MascotaController.getById)
router.post('/', MascotaController.create)
router.put('/:id', MascotaController.update)
router.delete('/:id', MascotaController._delete)

module.exports = router;