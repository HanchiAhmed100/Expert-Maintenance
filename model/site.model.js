const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, Sequelize) => {
    const site = sequelize.define("site", {
      longitude: {
        type: Sequelize.DECIMAL
      },
      latitude: {
        type: Sequelize.DECIMAL
      },
      adresse: {
        type: Sequelize.TEXT
      },
      rue: {
        type: Sequelize.STRING
      },
      codepostal: {
        type: Sequelize.INTEGER
      },
      ville: {
        type: Sequelize.STRING
      },
      contact:{
        type: Sequelize.STRING
      },
      valsync:{
        type: Sequelize.INTEGER
      },
    });  
    return site;
  };
