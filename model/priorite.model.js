const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, Sequelize) => {
    const priorite = sequelize.define("priorite", {
        nom: {
            type: Sequelize.STRING
        },
        valsync:{
            type: Sequelize.INTEGER
        },
    });  
    return priorite;
  };
