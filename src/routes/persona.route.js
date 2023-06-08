const express = require("express") 
const PersonaController = require("../Controllers/Persona.Controller");

const router = express.Router();

router.get('/', PersonaController.get)
router.get('/:id', PersonaController.getById)
router.post('/', PersonaController.create)
router.put('/:id', PersonaController.update)
router.delete('/:id', PersonaController._delete)

module.exports = router;