function print(name:string,printName:(name:string)=>void){
    printName(name)
}
print("Hanzla",(name)=>{
    console.log(name);
    
})
// overloading and function signature 
function abc():void;
function abc(age:number):void;
function abc(age?:number):void{
    if(!age)
        console.log("Age is not provided ");
    else 
    console.log(`Age is ${age}`);
    
}
// Rest and Spread operator 
// rest
let names:string[] =["Hanzla","Huzaifa","Khuzaima"]
function getAllUsers(...names:string[]):string[]{
return [...names];
}
// spread 
let names2 = [...names,"Ibrahim"]