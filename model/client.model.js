const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define("client", {
      nom: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.TEXT
      },
      tel: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      telcontact:{
        type: Sequelize.STRING
      },
      valsync:{
        type: Sequelize.INTEGER
      },
    });  
    return client;
  };
