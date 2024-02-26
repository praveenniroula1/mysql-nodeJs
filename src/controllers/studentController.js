import db from "../../mySql-Config/mysqlConfig.js";

// get all student list
export const getStudents = async (req, res) => {
  try {
    const data = await db.query("Select * from studens");
    if (!data) {
      return res.json({
        status: "error",
        message: "No Records Found",
      });
    }
    res.json({
      status: "error",
      message: "All Records of students Found",
      total: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSTudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.json({
        status: "error",
        message: "Invaklid ID",
      });
    }

    const data = await db.query(`Select * from studens where id=?`, [
      studentId,
    ]);

    if (data) {
      return res.json({
        status: "success",
        message: "Records Found",
        studentDetails: data[0],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, roll_no, classes, medium, fees } = req.body;
    if (!name || !roll_no || !classes || !medium || !fees) {
      return res.json({
        status: "error",
        message: "Provide all fields",
      });
    }

    const data = await db.query(
      `insert into studens (name,roll_no,classes, medium, fees) values(?,?,?,?,?)`,
      [name, roll_no, classes, medium, fees]
    );
    if (!data) {
      return res.json({
        status: "error",
        message: "Error in inserting user",
        data: data[0],
      });
    }

    res.json({
      status: "success",
      message: "New student record created",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;

    const { name, roll_no, fees, classes, medium } = req.body;

    const data = await db.query(
      `update studens set name=?, roll_no=?, fees=?,classes=?, medium=? where id=?`,
      [name, roll_no, fees, classes, medium, studentId]
    );
    if (!data) {
      return res.json({
        status: "error",
        message: "cannot update",
      });
    }
    res.json({
      status: "success",
      message: " student record updated",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudentById = async (req, res) => {
  const studentId = req.params.id;

  const data = await db.query(`DELETE FROM studens WHERE id = ?`, [studentId]);

  if (data) {
    return res.json({
      status: "success",
      message: "successfully deleted",
    });
  }
};
