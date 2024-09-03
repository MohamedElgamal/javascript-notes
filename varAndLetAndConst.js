//var keyword
//1-can be used before it is declared
//2-same variable can be redeclared 
//3-can be scoped to function or globally

//let or const keyword
//1-can't be used before it is declared 
//2-variable can't be redeclared 
//3-it is scoped to the block

//var keyword
/***1- we can access a var variable before inilization
 *      
 */
console.log(user);
var user;

/** 2- we can declare and redeclare the same var variable without errors* */
var user1 = "mohamed";
var user1 = "mahmoud";
console.log(user1);

//let keyword

/** 1-we cannot access a let variable before we decalre it (it will throw Reference error)  **/
// console.log(myName);
// let myName;

/**2- we can redeclare a let variable in the same scope it will thorws syntaxError**/
// let myName = "mohamed elgamal";
// let myName = "Mahmoud Elgamal";

/**3-we can ressiagned the let variable**/
let myName = "moh";
myName = "Mohamed Elgamal";


//example on let scope
let x = "100"
if(x = "100"){
   let x  = "500"
   console.log(x);
}
console.log(x)
//********************* */


//example on var 
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

// console.log(localVar);

/// it will throw out ReferenceError 
