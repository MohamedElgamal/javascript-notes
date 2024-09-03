/**
 * 1-First class Function ( function is assign to reference and can be called)
 *2-higher order function (functions can be passed as argument or function can return function)
 *3-Pure functions and side effects */
/**First class Function* */
 function addTwoNumber(num1 , num2){
    return num1 + num2;
 }

 function randomNumber(){
    return Math.floor( Math.random() * 10 );
 }

 function specificNumber(){
    return 48;
 }

 var useRandom =  true;
 var getNumber;
 if(useRandom){
    getNumber = randomNumber;
 } 
 else{
    getNumber = specificNumber;
 }
console.log(addTwoNumber(getNumber() , getNumber()));

/**Higheer Order Function* */
function addTwoNumber1(num1 , num2){
    return num1() + num2();
 }

 console.log(addTwoNumber1(randomNumber , specificNumber));

