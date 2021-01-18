const { DataTypes } = require("sequelize"); // Import the built-in data types
module.exports = (sequelize, Sequelize) => {
    const contact = sequelize.define("contact", {
        contact_id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
      },
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
