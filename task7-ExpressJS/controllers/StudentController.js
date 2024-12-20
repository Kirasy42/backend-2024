// import Model Student
const Student = require("../models/Student");

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
      }
      )
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

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
