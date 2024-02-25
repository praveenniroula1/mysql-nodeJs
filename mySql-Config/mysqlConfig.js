import mysql from "mysql2";

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "praveen",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("MySQL DB Connected successfully");
});

export default mysqlConnection;
