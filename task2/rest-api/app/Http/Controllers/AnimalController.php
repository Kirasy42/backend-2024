<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller{

    public $animals = [];

    public function index(){
        echo "Menampilkan seluruh data hewan";
        return response()->json($this->animals);
    }

    public function store(Request $request){
        echo "Menambahkan hewan baru";
        // Validasi input
        $request->validate([
            'name' => 'required|string',
            'species' => 'required|string',
        ]);

        // Menambahkan hewan baru ke array
        array_push($this->animals, [
            'id' => count($this->animals) + 1, // ID otomatis
            'name' => $request->name,
            'species' => $request->species,
        ]);

        return response()->json(['message' => 'Animal added successfully!'], 201);
    }

    public function update(Request $request, $id){
        // Validasi input
        $request->validate([
            'name' => 'sometimes|string',
            'species' => 'sometimes|string',
        ]);

        // Mencari hewan berdasarkan ID
        foreach ($this->animals as &$animal) {
            if ($animal['id'] == $id) {
                // Memperbarui data hewan
                if ($request->has('name')) {
                    $animal['name'] = $request->name;
                }
                if ($request->has('species')) {
                    $animal['species'] = $request->species;
                }
                return response()->json(['message' => 'Animal updated successfully!']);
            }
        }

        return response()->json(['message' => 'Animal not found!'], 404);
    }

    public function destroy($id){
        echo "Menghapus data hewan id $id";
        // Mencari hewan berdasarkan ID
        foreach ($this->animals as $key => $animal) {
            if ($animal['id'] == $id) {
                // Menghapus data hewan
                unset($this->animals[$key]);
                return response()->json(['message' => 'Animal deleted successfully!']);
            }
        }

        return response()->json(['message' => 'Animal not found!'], 404);
    }
}
