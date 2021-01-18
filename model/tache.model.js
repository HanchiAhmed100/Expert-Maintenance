const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, Sequelize) => {
    const tache = sequelize.define("tache", {
        employe_id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
        },
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
