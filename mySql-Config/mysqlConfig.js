import mysql from "mysql2/promise";

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "students_db",
});

export default mysqlPool;
