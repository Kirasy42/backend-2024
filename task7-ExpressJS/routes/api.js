// import StudentController
// const StudentController = require("../controllers/StudentController");
import StudentController from "../controllers/StudentController.js";

// const express = require("express");
import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

// student routes
router.get("/students", StudentController.index);
router.get("/students/:id", StudentController.get);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export router
// module.exports = router;
export default router;
