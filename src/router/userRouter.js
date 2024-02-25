import express from "express";
import connection from "../../mySql-Config/mysqlConfig.js";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { id, name } = req.body;

    connection.query(
      "INSERT INTO courses (id, name) VALUES (?, ?)",
      [id, name],
      (err, results) => {
        if (err) {
          console.error("Error registering user: ", err);
          res.status(500).json({
            status: "error",
            message: "Failed to register user",
          });
          return;
        }
        console.log("User registered successfully");
        res.json({
          status: "success",
          message: "Successfully registered the user",
          results,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

export default router;
