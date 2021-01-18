const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, Sequelize) => {
    const tache = sequelize.define("tache", {
        refernce: {
            type: Sequelize.STRING
        },
        nom: {
            type: Sequelize.STRING
        },
        duree: {
            type: Sequelize.DECIMAL
        },
        prixheure: {
            type: Sequelize.DECIMAL
        },
        dateaction: {
            type: Sequelize.DATE
        },
        valsync:{
            type: Sequelize.INTEGER
        },
    });  
    return tache;
  };
