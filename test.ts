// data types
// Primitive and non-primitive (reference)
// Primitive (basic data types) like Number , String , Boolean etc
// Reference (Array,Objects)

// Tuples in typeScript are like array with fixed size and data type
let student: [string, number] = ["Hanzla", 20];

// Enums in TypeScript are similar to objects, but they represent a fixed set of named constants whose keys and values are known ahead of time.
enum roles {
  ADMIN = "admin",
  CUSTOMER = "customer",
  RETAILER = "Retailer"
}
// any,unknown,void,null,undefined,never
// any : disable any kind of type checking
let a;
a = 20;
a = "Hanzla";
a.toUpperCase();

// unknown : it is just like any but won't allow unsafe operations
let b: unknown;
b = 12;
b = "Khuzaima";
// b.toUpperCase(); 'b' is of type 'unknown'
if (typeof b === "string") console.log(b.toUpperCase());
else if (typeof b === "number") console.log(b + 2);

// void is used when the function doesn`t return anything
function print(): void {
  console.log("Myself Hanzla , Cs Student");
}

// null is used to specify that the variable doesnt have any value
let data: object | null;
// so after dataBase query if the value is not found then data will be null otherwise it will be a object

// undefined
let arr: number[] = [1, 2, 3, 4, 5];
const result = arr.find(x => x === 10); // result is number | undefined

// never means never return a value
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// void vs never
// The void type can have undefined or null as a value where as never cannot have any value.

// Type inference means the automatic detection of a variable’s data type by TypeScript, based on the value assigned to it.
let username = "Hanzla";
// ⤷ TypeScript infers: username is of type `string`

// Type annotation  means You explicitly tell TypeScript what the type of a variable, parameter, or return value should be.
let age: number = 21;