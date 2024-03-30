const Thing = require('../model/Thing');

exports.CreateThing= (
    (req, res, next) => {
        const { title, description, imageUrl, price, userId } = req.body;
        const newThing = new Thing({
            title,
            description,
            imageUrl,
            price,
            userId
        });
        newThing.save()
            .then(() => res.status(201).json({ message: "Created successfully" }))
            .catch(error => res.status(400).json({ message: error.message }));
    }
);

exports.GetAllThings = (
    (req, res, next) => {
        Thing.find()
            .then(things => res.status(200).json(things))
            .catch(error => res.status(400).json({ message: error.message }));
    }
);

exports.GetThing = (
    (req, res, next) => {
        Thing.findOne({ _id: req.params.id })
          .then(thing => res.status(200).json(thing))
          .catch(error => res.status(404).json({ error }));
      }
);



exports.updateThing = (
    (req, res, next) => {
        Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié !'}))
          .catch(error => res.status(400).json({ error }));
      }
);


exports.DeleteThing = (
    (req, res, next) => {
        Thing.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      }
);