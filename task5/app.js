const {index, store, update, destroy} = require("./FruitController")

const main = () =>{
    console.log("Method Index - Menampilkan Buah");
    index();

    // console.log("\n");

    console.log("\nMethod Store - Menambahkan buah Pisang");
    store("Pisang");

    // console.log("\n");

    console.log("\nMethod Update - Update data 0 menjadi Kelapa");
    update(0, "Kelapa");

    // console.log("\n");

    console.log("\nMethod Destroy - Menghapus data 0");
    destroy(0);
};

main()