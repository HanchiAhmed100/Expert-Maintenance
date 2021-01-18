module.exports = app => {

    const image = require("../controller/image.controller.js");

    var router = require("express").Router();
  
    // Create a new image
    router.post("/", image.create);
  
    // Retrieve all image
    router.get("/", image.findAll);
    
    // Retrieve a single image with id
    router.get("/:id", image.findOne);
  
    // Update a image with id
    router.put("/:id", image.update);
  
    // Delete a image with id
    router.delete("/:id", image.delete);
  
    app.use('/api/image', router);
  };