const express = require("express") 
const FamiliaController = require("../Controllers/Familia.Controller.js");

const router = express.Router();

router.get('/', FamiliaController.get)
router.get('/:id', FamiliaController.getById)
router.post('/', FamiliaController.create)
router.put('/:id', FamiliaController.update)
router.delete('/:id', FamiliaController._delete)

module.exports = router;