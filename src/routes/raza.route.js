const express = require("express") 
const RazaController = require("../Controllers/Raza.Controller.js");

const router = express.Router();

router.get('/raza/', RazaController.get)
router.get('/:id', RazaController.getById)
router.post('/', RazaController.create)
router.put('/:id', RazaController.update)
router.delete('/:id', RazaController._delete)

module.exports = router;