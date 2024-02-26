import mysqlPool from "./mySql-Config/mysqlConfig.js";
import express from "express";
const app = express();

// middlwares
app.use(express.json());

// routes
import studentRoutes from "./src/routes/studentRoutes.js";
app.use("/api/v1/student", studentRoutes);

// config db
mysqlPool.query("SELECT 1").then(() => {
  console.log(`MySql DB is connected Successfully`);
  const port = 7000;
  app.listen(port, () => {
    console.log(`connected to port ${port}`);
  });
});
