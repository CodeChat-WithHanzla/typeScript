// Generics Functions
function print <T> (a:T){
console.log(a);
}
print<string>("Hanzla")
// Generics Interfaces
interface User<T>{
    name:string,
    age:number,
    key:T
}
const user :User<string> = {
    name:"Hanzla",
    age:20,
    key:"1e2r4t6y7u"
}
// Generics Classes 
class BottleMaker <T>{
    constructor(public key:T){

    }
}
let b1 = new BottleMaker("1e4rf5g6h6")