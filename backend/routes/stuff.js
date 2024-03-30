const express = require("express");
const auth = require("../middleware/auth")
const stuffController = require('../controller/stuff')

const Router = express.Router();


Router.post('/',auth, stuffController.CreateThing );

Router.get('/',auth, stuffController.GetAllThings);

Router.get('/:id',auth, stuffController.GetThing);

Router.put('/:id',auth, stuffController.updateThing);

Router.delete('/:id',auth, stuffController.DeleteThing);


module.exports = Router;