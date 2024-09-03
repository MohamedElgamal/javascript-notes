//assign function to variable
/**
 * anonymous function 
 * function Expression
 * literal function creation
 */

var myFun = function a7a(){
    return "a7a";
}
console.log(myFun())

var arr = [1 , 2 , 3 , function(a ,b ){
    return a+b;
}]
console.log(arr[3]( 1 , 1));

function Employee(name , age , salary){
    this.name = name ;
    this.age = age ;
    this.salary == salary;
}
let obj = new Employee("Mohamed" , 25 , 35000);

delete obj.age;
console.log(obj.age);
/**Arguments Collection in functions with immediately invoked function expression(IIFE)*/

(function(){
    var  sum = 0;
    for(let i = 0 ; i < arguments.length ; i++){
        sum+= arguments[i];
    }
    console.log(`the sume of the arguments is ${sum}`);
})(1 , 2 ,3)