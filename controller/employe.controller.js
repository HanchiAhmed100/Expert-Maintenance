const db = require("../model/index.js");
const employe = db.employe;
const intervention = db.intervention;
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

exports.login = (req , res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  employe.findAll({
    where: {
      [Op.and]: [
        { login : req.body.login },
        { pwd : req.body.password }
      ]
    }     
  }).then(data => {
    if(data.length != 0){
      res.send({"employe" : data, "login":"SUCESS"});
    }else{
      res.send({"employe" : data, "login":"FAILED"});
    }
  })
  .catch(err => {
      res.status(500).send({
      message:
          err.message || "Some error occurred while login"
      });
  });
}

exports.Set_Employe_Interventions = (req,res) =>{
    employe.findOne({
      where: {
        id: req.body.employe_id
      },
      include : intervention
    })
    .then(emp => {
      emp.addIntervention(req.body.intervention_id)
      res.send({message : "SUCESS"})
    })
    .catch(err => {
      res.status(500).send({
        "err" : err
      });
    });



  // employe.findOne({
  //   where: {
  //     id: req.body.employe_id
  //   }
  // })
  // .then(emp => {
  //   console.log("----------------------------- \n"+emp)
  //   intervention.findOne({
  //     where: {
  //       id: req.body.intervention_id
  //     }
  //   })
  //   .then(inter => {
  //     console.log("----------------------------- \n"+inter)

  //     emp.addIntervention(inter)
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       "err" : err
  //     });
  //   });
  // })
  // .catch(err => {
  //   res.status(500).send({
  //     "err" : err
  //   });
  // });


}
exports.Employe_Interventions = (req,res) =>{
  const id = req.params.id;
  employe.findOne({
    where: {
      id: id
    },
    include: intervention
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving employe with id=" + id
    });
  });
}

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