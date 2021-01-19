const { DataTypes } = require("sequelize"); // Import the built-in data types
module.exports = (sequelize, Sequelize) => {
    const contrat = sequelize.define("contrat", {
      datedebut: {
        type: Sequelize.DATE
      },
      datefin: {
        type: Sequelize.DATE
      },
      redevence: {
        type: Sequelize.DECIMAL
      },
      valsync:{
        type: Sequelize.INTEGER
      }
    });  
    return contrat;
  };
