const dbConfig = require("../config/db_config.js");
const Sequelize = require("sequelize");

// data base initaiton 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// loading models
db.contract = require("./contract.model.js")(sequelize, Sequelize);
db.client = require("./client.model.js")(sequelize, Sequelize);
db.site = require("./site.model.js")(sequelize, Sequelize);
db.employe = require("./employe.model.js")(sequelize, Sequelize);
db.image = require("./image.model.js")(sequelize, Sequelize);
db.intervention = require("./intervention.model.js")(sequelize, Sequelize);
db.priorite = require("./priorite.model.js")(sequelize, Sequelize);
db.tache = require("./tache.model.js")(sequelize, Sequelize);


// associations 

// db.tutorials.hasMany(db.comments, { as: "comments" });
// db.comments.belongsTo(db.tutorials, {
//   foreignKey: "tutorialId",
//   as: "tutorial",
// });

//client_contract association
db.client.hasMany(db.contract);
db.contract.belongsTo(db.client, {});

//client_site association
db.client.hasMany(db.site);
db.site.belongsTo(db.client, {});

//intervention_site association
db.site.hasMany(db.intervention);
db.intervention.belongsTo(db.site, {});

//intervention_priorite association
db.priorite.hasMany(db.intervention);
db.intervention.belongsTo(db.priorite, {});

//image_intervention association
db.intervention.hasMany(db.image);
db.image.belongsTo(db.intervention, {});

//tache_intervention association
db.intervention.hasMany(db.tache);
db.tache.belongsTo(db.intervention, {});

//employe_intervention_many_to_many association
db.intervention.belongsToMany(db.employe, { through: 'employe_intervention' });
db.employe.belongsToMany(db.intervention, { through: 'employe_intervention' });


module.exports = db;