"use strict";
function print(name, printName) {
    printName(name);
}
print("Hanzla", (name) => {
    console.log(name);
});
function abc(age) {
    if (!age)
        console.log("Age is not provided ");
    else
        console.log(`Age is ${age}`);
}
// Rest and Spread operator 
// rest
let names = ["Hanzla", "Huzaifa", "Khuzaima"];
function getAllUsers(...names) {
    return [...names];
}
// spread 
let names2 = [...names, "Ibrahim"];
