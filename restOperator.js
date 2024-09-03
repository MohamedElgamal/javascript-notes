//Rest operator : used to condence multiple elements into arr
function multiply (multiplier , ...theArgs){
    return theArgs.map((element) =>{
        return element * multiplier;
    })
}

let arr = multiply(2 , 1 , 2 , 3 ,4)
console.log(...arr);

// combining spread and rest operator
var data = [ 1 , 2 , 3];
const copyArr = (...args)=>{
    args.forEach((value , index)=>{
        console.log(`value : ${value} at ${index}`);
    })
}
copyArr(...data);
