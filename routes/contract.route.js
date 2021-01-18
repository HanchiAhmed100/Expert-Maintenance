module.exports = app => {

    const contract = require("../controller/contract.controller.js");

    var router = require("express").Router();
  
    // Create a new contract
    router.post("/", contract.createContract);
  
    // Retrieve all contract
    router.get("/", contract.findAllContracts);
    
    // Retrieve a single contract with id
    router.get("/:id", contract.findOneContract);
  
    // Update a contract with id
    router.put("/:id", contract.updateContract);
  
    // Delete a contract with id
    router.delete("/:id", contract.deleteContract);
  
    app.use('/api/contract', router);
  };