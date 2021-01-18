const db = require("../models");
const employe = db.employe;
const Op = db.Sequelize.Op;

// Create and Save a new employe
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
    employe.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the employe."
        });
    });
};

// Retrieve all employe from the database.
exports.findAll = (req, res) => {
    employe.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employe."
      });
    });
};

// Find a single employe with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    employe.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving employe with id=" + id
      });
    });
};

// Update a employe by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    employe.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
            message: "employe was updated successfully."
        });
      } else {
        res.send({
            message: `Cannot update employe with id=${id}. Maybe employe was not found !`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating employe with id=" + id
        });
    });
};

// Delete a employe with the specified id in the request
exports.delete = (req, res) => {
  
    employe.destroy({
        where: { id: id }
      })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "employe was deleted successfully!"
              });
              } else {
              res.send({
                  message: `Cannot employe employe with id=${id}. Maybe employe was not found!`
              });
              }
          })
      .catch(err => {
          res.status(500).send({
              message: "Could not delete employe with id=" + id
          });
      });
};