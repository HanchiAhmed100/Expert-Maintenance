const db = require("../model/index.js");
const client = db.client;
const Op = db.Sequelize.Op;

// Create and Save a new client
exports.createClient = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  client.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the client."
      });
    });
};

// Retrieve all clients from the database.
exports.findAllClients = (req, res) => {
    var condition = null;
  
    client.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving clients."
        });
      });
};

// Find a single client with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    client.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving client with id=" + id
        });
      });
};

// Update a client by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    client.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "client was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update client with id=${id}. Maybe client was not found !`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating client with id=" + id
      });
    });
};

// Delete a client with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    client.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "client was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete client with id=${id}. Maybe client was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete client with id=" + id
        });
      });
};