module.exports = app => {

    const employe = require("../controller/employe.controller.js");

    var router = require("express").Router();
  
    // Create a new contract
    router.post("/", employe.create);
  
    // Retrieve all contract
    router.get("/", employe.findAll);
    
    // Retrieve a single contract with id
    router.get("/:id", employe.findOne);
  
    // Update a contract with id
    router.put("/:id", employe.update);
  
    // Delete a contract with id
    router.delete("/:id", employe.delete);
  
    app.use('/api/employe', router);
  };