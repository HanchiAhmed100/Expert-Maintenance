const db = require("../model/index.js");
const image = db.image;
const Op = db.Sequelize.Op;

// Create and Save a new image
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
    image.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the image."
        });
    });
};

// Retrieve all image from the database.
exports.findAll = (req, res) => {
    image.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving image."
      });
    });
};

// Find a single image with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    image.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving image with id=" + id
      });
    });
};

// Update a image by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    image.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
            message: "image was updated successfully."
        });
      } else {
        res.send({
            message: `Cannot update image with id=${id}. Maybe image was not found !`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating image with id=" + id
        });
    });
};

// Delete a image with the specified id in the request
exports.delete = (req, res) => {
  
    image.destroy({
        where: { id: id }
      })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "image was deleted successfully!"
              });
              } else {
              res.send({
                  message: `Cannot image image with id=${id}. Maybe image was not found!`
              });
              }
          })
      .catch(err => {
          res.status(500).send({
              message: "Could not delete image with id=" + id
          });
      });
};