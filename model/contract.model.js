const { DataTypes } = require("sequelize"); // Import the built-in data types
module.exports = (sequelize, Sequelize) => {
    const contact = sequelize.define("contact", {
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
    return contact;
  };
