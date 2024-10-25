<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();

        $data = [
            "message"=> "Get All Students Datas",
            "data"=> $students
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request){
        $input = [
            "nama"=> $request->nama,
            "nim"=> $request->nim,
            "email"=> $request->email,
            "jurusan"=> $request->jurusan,
        ];

        $student = Student::create($input);

        $data = [
            "message" => "Student is Created Succesfully",
            "data"=> $student,
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        if (!$student){
            return response()->json(["message"=> "Student ID not found"], 404);
        }

        $request->validate(
            [
                "nama" => "sometimes|required|string|max:255",
                "nim" => "sometimes|required|string|max:255",
                "email" => "sometimes|required|string|max:255",
                "jurusan" => "sometimes|required|string|max:255",
            ]
        );

        $student -> fill($request -> only(["nama", "nim", "email", "jurusan"]));
        $student -> save();

        $data = [
            "message" => "Student data Updated Succesfully",
            "data"=> $student,
        ];

        return response()->json($data, 200);
    }

    public function destroy($id){
        $student = Student::find($id);

        if (!$student){
            return response()->json(["message"=> "Student ID not found"],404);
        }

        $student -> delete();

        return response()->json(["message"=> "Deletion Process Succesfully"],200);
    }
}
