// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  static getAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      db.query(sql, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }

  static getData(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        if (results.length === 0) {
          return resolve(null);
        }
        resolve(results[0]);
      });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students (nama, nim, email, jurusan) VALUES (?, ?, ?, ?)";
      db.query(sql, [data.nama, data.nim, data.email, data.jurusan], (err, results) => {
        if (err) {
          return reject(err);
        }

        const newStudent = {
          id: results.insertId,
          nama: data.nama,
          nim: data.nim,
          email: data.email,
          jurusan: data.jurusan
        };

        resolve(newStudent);
      });
    });
  }
}

// export class Student
module.exports = Student;
