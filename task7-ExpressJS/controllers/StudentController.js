// import Model Student
// const Student = require("../models/Student");
import Student from "../models/Student.js";

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.getAll();

    const data = {
      message: "Shows All Data of Students",
      datas: students,
    };

    res.json(data);
  }

  async get(req, res) {
    const studentId = req.params.id;
    const studentData = await Student.getData(studentId);

    if (studentData) {
      res.status(200).json({
        message: "Shows a Data of Students",
        data: studentData
      })
    } else {
      res.status(404).json({message: "Student data not found!"});
    }
  }

  async store(req, res) {
    const {nama, nim, email, jurusan} = req.body;

    // Validasi jika ada Field yang kosong
    if (!nama || !nim || !email || !jurusan) {
      return res.status(400).json({
        message: "Semua field (nama, nim, email, jurusan) harus diisi.",
      });
    }

    const newStudent = await Student.create({nama, nim, email, jurusan});

    const data = {
      message: "Added new Student Data",
      data: newStudent,
    };

    res.status(201).json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    const { nama, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan){
      return res.status(400).json({
        message: "Semua Field (nama, nim, email, jurusan) Harus Diisi!",
      });
    }

    const updatedStudent = await Student.update(id, {nama, nim, email, jurusan});

    if (updatedStudent){
      res.status(200).json({
        message: `Updated Student ID : ${id}`,
        data: updatedStudent,
      });
    } else{
      res.status(404).json({
        message: "Student data not Found!"
      });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    const deleted = await Student.delete(id);

    if (deleted){
      res.status(200).json({
        message: "Student Data is Deleted Successfuly",
        data: id
      });
    } else {
      res.status(404).json({message: "Student data is not Found!"})
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
// module.exports = object;
export default object;
