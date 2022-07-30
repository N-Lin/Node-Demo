const { Sequelize} = require("sequelize");

const hostName = process.env.DBHOST;
const userName = process.env.DBUSER;
const password = process.env.PASSWORD;
const database = process.env.DB;
const dialect = process.env.DIALECT;

const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
});

module.exports = sequelize;