<?php

class Animal {

    public $animals = [];

    function __construct($data) {
        $this->animals = $data;
    }

    function index() {
        foreach ($this->animals as $animal) {
            echo $animal . "<br>";
        }
    }

    function store($data) {
        array_push( $this->animals, $data);
    }

    function update($index, $data) {
        $this->animals[$index] = $data;
    }

    function destroy($index) {
        unset($this->animals[$index]);
    }
}

$animal = new Animal(["Ayam", "Ikan"]);

echo "Index - Menampilkan Seluruh Hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan Hewan Baru (burung) <br>";
$animal -> store("Burung");
$animal -> index();
echo "<br>";

echo "Update - Mengupdate Hewan <br>";
$animal -> update(0, "Kucing Anggora");
$animal -> index();
echo "<br>";

echo "Destroy - Menghapus Hewan <br>";
$animal -> destroy(1);
$animal -> index();
echo "<br>";