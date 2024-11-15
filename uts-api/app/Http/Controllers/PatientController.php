<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PatientController extends Controller
{
    // Get All Resource
    public function index(){
        // Memanggil semua data Patient
        $patients = Patient::all();

        // Melakukan validasi apakah data $patients kosong
        if ($patients->isEmpty()){
            $data = [
                "message"=> "Data is Empty"
            ];
            $statuscode = 200;
        } else{ 
            $data = [
                "message"=> "Get All Resource",
                "data"=> $patients
            ];
            $statuscode = 200;
        }

        return response()->json($data, $statuscode);
    }


    // Add Resource
    public function store(Request $request){

        // Menggunakan Validator untuk memvalidasi data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'phone' => 'required|string',
            'address' => 'required|string',
            'status' => 'required|string',
            'in_date_at' => 'required|date',
        ]);

        // Melakukan validasi jika $validator tidak sesuai dengan required
        if ($validator -> fails()){
            $data = [
                'errors'=> $validator->errors()
            ];
            $statuscode = 204;
        } else{
            $patient = Patient::create($request -> all());
            $data = [
                "message"=> "Resource is added successfully",
                "data"=> $patient
            ];
            $statuscode = 200;
        }

        return response()->json($data, $statuscode);
    }

    // Get Detail Resource
    public function show($id){
        // Memastikan data id tersedia
        $patient = Patient::find($id);
        
        if (!$patient){
            $data = [
                "message"=> "Resource not found"
            ];
            $statuscode = 404;
        } else{
            $data = [
                "message"=> "Get Detail Resource",
                "data"=> $patient
            ];
            $statuscode = 200;
        }
        
        return response()->json($data, $statuscode);
    }
    
    // Edit Resource
    public function update(Request $request, $id){
        // Memastikan data ID tersedia
        $patient = Patient::find($id);
        
        if (!$patient){
            $data = [
                "message"=> "Resource not found"
            ];
            $statuscode = 404;
        } else{
            $request->validate(
                [
                    "name" => "sometimes|required|string",
                    "phone" => "sometimes|required|string",
                    "address" => "sometimes|required|string",
                    "status" => "sometimes|required|string",
                    "in_date_at" => "sometimes|required|string"
                ]
            );
            
            $patient -> fill($request -> only(["name", "phone", "address", "status", "in_date_at"]));
            $patient -> save();
            
            $data = [
                "message" => "Resource is updated successfully",
                "data"=> $patient,
            ];
            $statuscode = 200;
        }

        return response()->json($data, $statuscode);
    }

    // Delete Resource
    public function destroy($id){
        // Memastikan data ID tersedia
        $patient = Patient::find($id);

        if (!$patient){
            $data = [
                "message"=> "Resource not found"
            ];
            $statuscode = 404;
        } else{
            // Menggunakan Method Delete untuk menghapus data
            $patient -> delete();
            
            $data = [
                "message"=> "Resource is deleted successfully"
            ];
            $statuscode = 200;
        }

        return response()->json($data, $statuscode);
    }

    // Search Resource by name
    public function search($name){
        $patient = Patient::where('name', 'like', "%" . $name . "%") -> get();

        if ($patient -> isEmpty()){
            $data = [
                "message"=> "Resource not found"
            ];
            $statuscode = 404;
        } else{
            $data = [
                "message" => "Get searched Resource",
                "data"=> $patient,
            ];
            $statuscode = 200;
        }

        return response()->json($data, $statuscode);
    }

    // Get Positive Resource
    public function positive(){
        $patients = Patient::where("status", "positive") -> get();

        $data = [
            "message" => "Get Positive Resource",
            "total" => $patients->count(),
            "data"=> $patients,
        ];
        $statuscode = 200;

        return response()->json($data, $statuscode);
    }

    // Get Recovered Resource
    public function recovered(){
        $patients = Patient::where("status", "recovered") -> get();

        $data = [
            "message" => "Get Recovered Resource",
            "total" => $patients->count(),
            "data"=> $patients,
        ];
        $statuscode = 200;

        return response()->json($data, $statuscode);
    }

    // Get Dead Resource
    public function dead(){
        $patients = Patient::where("status", "dead") -> get();

        $data = [
            "message" => "Get Dead Resource",
            "total" => $patients->count(),
            "data"=> $patients,
        ];
        $statuscode = 200;

        return response()->json($data, $statuscode);
    }
}
