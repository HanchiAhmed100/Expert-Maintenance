const db = require("../models");
const site = db.site;
const Op = db.Sequelize.Op;

// Create and Save a new site
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
    site.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the site."
        });
    });
};

// Retrieve all site from the database.
exports.findAll = (req, res) => {
    site.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving site."
      });
    });
};

// Find a single site with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    site.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving site with id=" + id
      });
    });
};

// Update a site by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    site.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
            message: "site was updated successfully."
        });
      } else {
        res.send({
            message: `Cannot update site with id=${id}. Maybe site was not found !`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating site with id=" + id
        });
    });
};

// Delete a site with the specified id in the request
exports.delete = (req, res) => {
  
    site.destroy({
        where: { id: id }
      })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "site was deleted successfully!"
              });
              } else {
              res.send({
                  message: `Cannot site site with id=${id}. Maybe site was not found!`
              });
              }
          })
      .catch(err => {
          res.status(500).send({
              message: "Could not delete site with id=" + id
          });
      });
};