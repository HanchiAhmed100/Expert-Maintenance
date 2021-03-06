const { client } = require("../model/index.js");
const db = require("../model/index.js");
const contrat = db.contrat;
const Op = db.Sequelize.Op;

// Create and Save a new contract
exports.createContrat = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
    contrat.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the contrat."
        });
    });
};

// Retrieve all contract from the database.
exports.findAllContrats = (req, res) => {
  contrat.findAll({      
    include : client
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contract."
      });
    });
};

// Find a single contract with an id
exports.findOneContrat = (req, res) => {
    const id = req.params.id;
    contrat.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving contract with id=" + id
      });
    });
};

// Update a contract by the id in the request
exports.updateContract = (req, res) => {
    const id = req.params.id;

    contrat.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
            message: "contract was updated successfully."
        });
      } else {
        res.send({
            message: `Cannot update contract with id=${id}. Maybe contract was not found !`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating contract with id=" + id
        });
    });
};

// Delete a contract with the specified id in the request
exports.deleteContract = (req, res) => {
    const id = req.params.id;

    contrat.destroy({
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "contract was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot contract contract with id=${id}. Maybe contract was not found!`
            });
            }
        })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete contract with id=" + id
        });
    });
};