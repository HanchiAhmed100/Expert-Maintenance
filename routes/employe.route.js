module.exports = app => {

    const employe = require("../controller/employe.controller.js");

    var router = require("express").Router();
  
    // Create a new employe
    router.post("/", employe.create);
  
    // Retrieve all employe
    router.get("/", employe.findAll);
    
    // login employe
    router.post("/login", employe.login);
    
    // Retrieve a single employe with id
    router.get("/:id", employe.findOne);
  
    // Update a employe with id
    router.put("/:id", employe.update);
  
    // Delete a employe with id
    router.delete("/:id", employe.delete);
  
    app.use('/api/employe', router);
  };