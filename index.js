const express = require("express");

const app = express();
require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const pass = process.env.PASS;
const URL = process.env.HOST_URL;

// Connect to the PostgreSQL database (replace with your actual credentials)
const sequelize = new Sequelize(dbname, dbuser, pass, {
  host: URL,
  dialect: "postgres",
  // Other configurations if needed
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to PostgreSQL has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(3000, () => {
  console.log("listeing..");
});
