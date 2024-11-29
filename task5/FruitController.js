const fruits = require("./fruits.js");

// Using Regular Function
function index() {
    for (const fruit of fruits){
        console.log(fruit);
    }
};

// Using Variable Function
const store = function(name){
    fruits.push(name);
    index();
};

// Using Arrow Function
const update = (position, name) => {
    // Validate Index Position with Short Conditional Ternary Operator
    (position < 0 || position >= fruits.length)
        ? console.log("Position out of range!")
        : (fruits[position] = name, index());

    // Validate Index Position with Regular Validator
    // if (position < 0 || position >= fruits.length){
    //     console.log("Position out of range!");
    //     return;
    // } else{
    //     fruits[position] = name
    //     index()
    // }
};

// Using Short Arrow Function
const destroy = (position) => (fruits.splice(position, 1), index());


module.exports = {index, store, update, destroy};