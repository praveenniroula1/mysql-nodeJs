import connection from "./mySql-Config/mysqlConfig.js";
import express from "express";
const app = express();

// middlwares
app.use(express.json());

// router
import userRouter from "./src/router/userRouter.js";
app.use("/api/v1/user", userRouter);

// port
const port = 7000;
app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
