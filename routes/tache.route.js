module.exports = app => {

    const tache = require("../controller/tache.controller.js");

    var router = require("express").Router();
  
    // Create a new contract
    router.post("/", tache.create);
  
    // Retrieve all contract
    router.get("/", tache.findAll);
    
    // Retrieve a single contract with id
    router.get("/:id", tache.findOne);
  
    // Update a contract with id
    router.put("/:id", tache.update);
  
    // Delete a contract with id
    router.delete("/:id", tache.delete);
  
    app.use('/api/tache', router);
  };