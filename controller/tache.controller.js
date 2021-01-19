const db = require("../model/index.js");
const tache = db.tache;
const Op = db.Sequelize.Op;

// Create and Save a new tache
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
    tache.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the tache."
        });
    });
};

// Retrieve all tache from the database.
exports.findAll = (req, res) => {
    tache.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tache."
      });
    });
};

// Find a single tache with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    tache.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving tache with id=" + id
      });
    });
};

// Update a tache by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    tache.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
            message: "tache was updated successfully."
        });
      } else {
        res.send({
            message: `Cannot update tache with id=${id}. Maybe tache was not found !`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating tache with id=" + id
        });
    });
};

// Delete a tache with the specified id in the request
exports.delete = (req, res) => {
  
    tache.destroy({
        where: { id: id }
      })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "tache was deleted successfully!"
              });
              } else {
              res.send({
                  message: `Cannot tache tache with id=${id}. Maybe tache was not found!`
              });
              }
          })
      .catch(err => {
          res.status(500).send({
              message: "Could not delete tache with id=" + id
          });
      });
};