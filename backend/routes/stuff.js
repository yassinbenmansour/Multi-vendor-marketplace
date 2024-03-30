const express = require("express");
const Thing = require('../model/Thing');
const stuffController = require('../controller/stuff')

const Router = express.Router();


Router.post('/', stuffController.CreateThing );

Router.get('/', stuffController.GetAllThings);

Router.get('/:id', stuffController.GetThing);

Router.put('/:id', stuffController.updateThing);

Router.delete('/:id', stuffController.DeleteThing);


module.exports = Router;