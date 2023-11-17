const express = require("express");

const app = express();
const { Sequelize } = require("sequelize");

// Connect to the PostgreSQL database (replace with your actual credentials)
const sequelize = new Sequelize(
  "db_sahil",
  "db_sahil_user",
  "TOIbVMKtkNiiG2lA2GieuLD9MxFHf2Dz",
  {
    host: "postgres://db_sahil_user:TOIbVMKtkNiiG2lA2GieuLD9MxFHf2Dz@dpg-cl2be8il7jac73fcmjo0-a.oregon-postgres.render.com/db_sahil",
    dialect: "postgres",
    // Other configurations if needed
  }
);

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
