const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: `postgres`,
  host: "localhost",
  database: "users",
  username: "postgres",
  password: "aa1924aa",
  port: 5432,
});



module.exports = db;

