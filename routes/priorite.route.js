module.exports = app => {

    const priorite = require("../controller/priorite.controller.js");

    var router = require("express").Router();
  
    // Create a new contract
    router.post("/", priorite.create);
  
    // Retrieve all contract
    router.get("/", priorite.findAll);
    
    // Retrieve a single contract with id
    router.get("/:id", priorite.findOne);
  
    // Update a contract with id
    router.put("/:id", priorite.update);
  
    // Delete a contract with id
    router.delete("/:id", priorite.delete);
  
    app.use('/api/intervention', router);
  };