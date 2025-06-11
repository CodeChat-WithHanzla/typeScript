"use strict";
// class User {
//   constructor(
//     public name: string,
//     public age: number,
//     public isAdmin: boolean = false,
//     public study: string
//   ) {}
//   getUser() {
//     console.log(this.name, this.age, this.isAdmin);
//   }
// }
// let user = new User("Hanzla", 20, "BSCS"); it will cause a issue becoz of disorder ,  parameters with default values at the end of the constructor. It's a best practice and avoids these issues.
// user.getUser();
class User {
    constructor(name, age, study, isAdmin = false) {
        this.name = name;
        this.age = age;
        this.study = study;
        this.isAdmin = isAdmin;
    }
    getUser() {
        return {
            name: this.name,
            age: this.age,
            education: this.study,
            isAdmin: this.isAdmin
        };
    }
}
let user = new User("Hanzla", 20, "BSCS");
console.log(user.getUser());
// Getters and Setters
class Employee {
    constructor(_name) {
        this._name = _name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
let emp = new Employee("Hanzla");
emp.name = "Huzaifa";
console.log(emp.name);
// Static members of a class 
class Calulator {
    constructor(radius) {
        this.radius = radius;
    }
    calculate_area() {
        return 2 * Calulator.PI * this.radius;
    }
}
Calulator.PI = 3.14;
// Static members belongs to class itself not its instance 
// So without creating the instance of the class , we can access PI 
console.log(Calulator.PI);
// Abstract class 
// A class that cant be initaited , and act as a base class for others 
class Payment {
    constructor(amount, account_number) {
        this.amount = amount;
        this.account_number = account_number;
        if (amount < 0 || !amount)
            throw new Error("Enter Valid Amount.");
        if (!account_number)
            throw new Error("Account number Required.");
    }
}
class payPal extends Payment {
}
