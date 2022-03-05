const { Sequelize } = require("sequelize");
const User = require('../models/user');

// const user= process.env.DB_USER;
// const host= process.env.DB_HOST;
// const database= process.env.DB_NAME;
// const port= process.env.DB_PORT;
// const password= process.env.DB_PASSWORD;
// const schema = process.env.DB_SCHEMA;

const user='cloud_config_app'
const database='compass_portal_dev'
const host='ccm-npd-dbcluster.cluster-cz4xblhxtzuk.us-east-1.rds.amazonaws.com'
const port=5432
const password="+6!#R#sCLK0HwhGvn2#O3CWU@"
const schema ='ccm'


const sequelize = new Sequelize(database,user,password,

    { host: host,
    port: port,
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
    dialect: "postgres",
    schema: schema,
    
  }

);


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
sequelize.sync();

module.exports = sequelize;
