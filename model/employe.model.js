const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, Sequelize) => {
    const employe = sequelize.define("employe", {
        login: {
            type: Sequelize.STRING
        },
        pwd: {
            type: Sequelize.STRING
        },
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.TEXT
        },
        actif: {
            type: Sequelize.BOOLEAN
        },
        valsync:{
            type: Sequelize.INTEGER
        },
    });  
    return employe;
  };
