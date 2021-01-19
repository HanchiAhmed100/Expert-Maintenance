module.exports = app => {

    const contrat = require("../controller/contrat.controller.js");

    var router = require("express").Router();
  
    // Create a new contract
    router.post("/", contrat.createContrat);
  
    // Retrieve all contract
    router.get("/", contrat.findAllContrats);
    
    // Retrieve a single contract with id
    router.get("/:id", contrat.findOneContrat);
  
    // Update a contract with id
    router.put("/:id", contrat.updateContract);
  
    // Delete a contract with id
    router.delete("/:id", contrat.deleteContract);
  
    app.use('/api/contrat', router);
  };