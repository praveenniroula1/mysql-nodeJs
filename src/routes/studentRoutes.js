import express from "express";
import {
  getSTudentById,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudentById,
} from "../controllers/studentController.js";
const router = express.Router();

// get All student List
router.get("/getall", getStudents);

// get student by ID
router.get("/get/:id", getSTudentById);

// post students
router.post("/create", createStudent);

// updae students
router.put("/update/:id", updateStudent);

// updae students
router.delete("/delete/:id", deleteStudentById);

export default router;
