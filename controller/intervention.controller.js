const { site , priorite, employe } = require("../model/index.js");
const db = require("../model/index.js");
const intervention = db.intervention;
const Op = db.Sequelize.Op;

// Create and Save a new intervention
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
    intervention.create(req.body)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the intervention."
        });
    });
};

// Retrieve all intervention from the database.
exports.findAll = (req, res) => {
    intervention.findAll({include : [site ,priorite]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving intervention."
      });
    });
};

// Retrieve intervention and employes from the database.
exports.findInterventionEmployes = (req, res) => {
  intervention.findOne({
    where: {
      id: req.params.id
    },
    include : [site ,priorite,employe]
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving intervention."
    });
  });
};


// Find a single intervention with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    intervention.findOne({where : {id : req.params.id} , include : [site ,priorite ]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving intervention with id=" + id
      });
    });
};

// Update a intervention by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    intervention.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
            message: "intervention was updated successfully."
        });
      } else {
        res.send({
            message: `Cannot update intervention with id=${id}. Maybe intervention was not found !`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating intervention with id=" + id
        });
    });
};

// Delete a intervention with the specified id in the request
exports.delete = (req, res) => {
  
    intervention.destroy({
        where: { id: id }
      })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "intervention was deleted successfully!"
              });
              } else {
              res.send({
                  message: `Cannot intervention intervention with id=${id}. Maybe intervention was not found!`
              });
              }
          })
      .catch(err => {
          res.status(500).send({
              message: "Could not delete intervention with id=" + id
          });
      });
};