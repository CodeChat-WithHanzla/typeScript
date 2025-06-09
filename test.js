"use strict";
// data types
// Primitive and non-primitive (reference)
// Primitive (basic data types) like Number , String , Boolean etc
// Reference (Array,Objects)
// Tuples in typeScript are like array with fixed size and data type
let student = ["Hanzla", 20];
// Enums in TypeScript are similar to objects, but they represent a fixed set of named constants whose keys and values are known ahead of time.
var roles;
(function (roles) {
    roles["ADMIN"] = "admin";
    roles["CUSTOMER"] = "customer";
    roles["RETAILER"] = "Retailer";
})(roles || (roles = {}));
// any,unknown,void,null,undefined,never
// any : disable any kind of type checking
let a;
a = 20;
a = "Hanzla";
a.toUpperCase();
// unknown : it is just like any but won't allow unsafe operations
let b;
b = 12;
b = "Khuzaima";
// b.toUpperCase(); 'b' is of type 'unknown'
if (typeof b === "string")
    console.log(b.toUpperCase());
else if (typeof b === "number")
    console.log(b + 2);
// void is used when the function doesn`t return anything
function print() {
    console.log("Myself Hanzla , Cs Student");
}
// null is used to specify that the variable doesnt have any value
let data;
// so after dataBase query if the value is not found then data will be null otherwise it will be a object
// undefined
let arr = [1, 2, 3, 4, 5];
const result = arr.find(x => x === 10); // result is number | undefined
// never means never return a value
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// void vs never
// The void type can have undefined or null as a value where as never cannot have any value.
// Type inference means the automatic detection of a variable’s data type by TypeScript, based on the value assigned to it.
let username = "Hanzla";
// ⤷ TypeScript infers: username is of type `string`
// Type annotation  means You explicitly tell TypeScript what the type of a variable, parameter, or return value should be.
let age = 21;
const user = {
    name: "Hanzla",
    age: 21
};
const products = [
    { id: 1, name: "Chair" },
    { id: 2, name: "Table" }
];
// Note that the name of above two interfaces are same so that will merge
const categories = [
    { id: "1e47jhttteert", name: "Pants" },
    { id: "23rtyuttteert", name: "Shirts" }
];
let c;
function abc(a) {
    // function logic
}
const user1 = {
    name: "Ali",
    employeeId: 123
};
