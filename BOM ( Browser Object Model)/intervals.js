//Set Intervals
//this method take two parameters (callback , time in mileseconds)
//after this amount of time the callback function is called and this operation is repeated until interval is cleared
let intervalId;
function displayHello(){
    intervalId  = setInterval(function (){
        console.log("hello world !!")
        // console.log(intervalId);
    } , 3000);
}
displayHello();
/*

(()=>{
    clearInterval(intervalId)
})()//IMMEDIATE INVOKE FUNCTION EXPRESSION ( IIFE)
*/

setTimeout(()=>{clearInterval(intervalId)} , 6045);