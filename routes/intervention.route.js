module.exports = app => {

    const intervention = require("../controller/intervention.controller.js");

    var router = require("express").Router();
  
    // Create a new contract
    router.post("/", intervention.create);
  
    // Retrieve all contract
    router.get("/", intervention.findAll);
    
    // Retrieve a single contract with id
    router.get("/:id", intervention.findOne);
  
    // Update a contract with id
    router.put("/:id", intervention.update);
  
    // Delete a contract with id
    router.delete("/:id", intervention.delete);
  
    app.use('/api/intervention', router);
  };