const db = require("../models/index.js");
const contract = db.contract;
const Op = db.Sequelize.Op;

// Create and Save a new contract
exports.createContract = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
    contract.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the contract."
        });
    });
};

// Retrieve all contract from the database.
exports.findAllContracts = (req, res) => {
    contract.findAll()
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
exports.findOneContract = (req, res) => {
    const id = req.params.id;
    contract.findByPk(id)
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

    contract.update(req.body, {
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

    contract.destroy({
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