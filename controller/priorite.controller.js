const db = require("../model/index.js");
const prorite = db.prorite;
const Op = db.Sequelize.Op;

// Create and Save a new prorite
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
    prorite.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the prorite."
        });
    });
};

// Retrieve all prorite from the database.
exports.findAll = (req, res) => {
    prorite.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving prorite."
      });
    });
};

// Find a single prorite with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    prorite.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving prorite with id=" + id
      });
    });
};

// Update a prorite by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    prorite.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
            message: "prorite was updated successfully."
        });
      } else {
        res.send({
            message: `Cannot update prorite with id=${id}. Maybe prorite was not found !`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating prorite with id=" + id
        });
    });
};

// Delete a prorite with the specified id in the request
exports.delete = (req, res) => {
  
    prorite.destroy({
        where: { id: id }
      })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "prorite was deleted successfully!"
              });
              } else {
              res.send({
                  message: `Cannot prorite prorite with id=${id}. Maybe prorite was not found!`
              });
              }
          })
      .catch(err => {
          res.status(500).send({
              message: "Could not delete prorite with id=" + id
          });
      });
};