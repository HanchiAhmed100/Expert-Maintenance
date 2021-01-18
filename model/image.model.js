const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, Sequelize) => {
    const image = sequelize.define("image", {
        image_id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
        },
        nom: {
            type: Sequelize.STRING
        },
        img: {
            type: Sequelize.STRING
        },
        dateCapture: {
            type: Sequelize.DATE
        },
        valsync:{
            type: Sequelize.INTEGER
        },
    });  
    return image;
  };
