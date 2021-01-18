const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, Sequelize) => {
    const priorite = sequelize.define("priorite", {
        priorite_id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
        },
        nom: {
            type: Sequelize.STRING
        },
        valsync:{
            type: Sequelize.INTEGER
        },
    });  
    return priorite;
  };
