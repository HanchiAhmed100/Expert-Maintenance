const { DataTypes } = require("sequelize"); // Import the built-in data types
module.exports = (sequelize, Sequelize) => {
    const intervention = sequelize.define("intervention", {

        datedebut: {
            type: Sequelize.DATE
        },
        datefin: {
            type: Sequelize.DATE
        },
        heuredebutplan: {
            type: Sequelize.TIME
        },
        heurefinplan: {
            type: Sequelize.TIME
        },
        commentaires: {
            type: Sequelize.TEXT
        },
        dateplanification: {
            type: Sequelize.DATE
        },
        heuredebuteffect: {
            type: Sequelize.TIME
        },
        heurefineffect: {
            type: Sequelize.TIME
        },
        terminee: {
            type: Sequelize.BOOLEAN
        },
        dateterminaison: {
            type: Sequelize.DATE
        },
        validee: {
            type: Sequelize.BOOLEAN
        },
        datevalidation: {
            type: Sequelize.DATE
        },
        valsync:{
            type: Sequelize.INTEGER
        },
    });  
    return intervention;
  };
