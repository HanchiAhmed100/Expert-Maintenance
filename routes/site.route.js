module.exports = app => {

    const site = require("../controller/site.controller.js");

    var router = require("express").Router();
  
    // Create a new contract
    router.post("/", site.create);
  
    // Retrieve all contract
    router.get("/", site.findAll);
    
    // Retrieve a single contract with id
    router.get("/:id", site.findOne);
  
    // Update a contract with id
    router.put("/:id", site.update);
  
    // Delete a contract with id
    router.delete("/:id", site.delete);
  
    app.use('/api/site', router);
  };