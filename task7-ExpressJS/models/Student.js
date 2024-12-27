// import database
// const db = require("../config/database");
import db from "../config/database.js";

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

  static update(id, data) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE students SET name = ?, nim = ?, email = ?, jurusan = ? WHERE id = ?";
      db.query(sql, [data.nama, data.nim, data.email, data.jurusan, id], (err, results) => {
        if (err) {
          return reject(err);
        }
        if (results.affectedRows === 0) {
          return resolve(null);
        }
        resolve({id, ...data});
      });
    });
  }

  static partialUpdate(id, data) {
    const fields = [];
    const values = [];

    if (data.nama) {
      field.push("nama = ?");
      values.push(data.nama);
    }
    if (data.nim) {
      field.push("nim = ?");
      values.push(data.nim);
    }
    if (data.email) {
      field.push("email = ?");
      values.push(data.email);
    }
    if (data.jurusan) {
      field.push("jurusan = ?");
      values.push(data.jurusan);
    }

    if (fields.length === 0) {
      return Promise.resolve(null);
    }

    const sql = `UPDATE students SET ${fields.join(", ")} WHERE id = ?`;
    values.push(id);

    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, results) => {
        if (err){
          return reject(err);
        }
        if (results.affectedRows === 0){
          return resolve(null);
        }
        resolve({id, ...data});
      });
    });
  }

  static delete(id){
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, [id], (err, results) => {
        if (err){
          return reject(err);
        }

        if (results.affectedRows === 0){
          return resolve(null);
        }

        resolve(true)
      });
    });
  }
}

// export class Student
// module.exports = Student;
export default Student;
