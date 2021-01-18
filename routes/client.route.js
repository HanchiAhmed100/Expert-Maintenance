module.exports = app => {

    const client = require("../controller/client.controller.js");

    var router = require("express").Router();
  
    // Create a new client
    router.post("/", client.createClient);
  
    // Retrieve all client
    router.get("/", client.findAllClients);
    
    // Retrieve a single client with id
    router.get("/:id", client.findOne);
  
    // Update a client with id
    router.put("/:id", client.update);
  
    // Delete a client with id
    router.delete("/:id", client.delete);
  
    app.use('/api/client', router);
  };