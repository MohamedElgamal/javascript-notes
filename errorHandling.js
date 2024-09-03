/** 
 * Type of Error
 * 1- Reference Error (variable not declared)
 * 2-Syntax Error ( try and catch can't be used in this case to handle errror)
 * 3- Type Error(trying to run method on a non-supported data type)
 * 4-Range Error (giving a value to function out of range of supported values )**/
function addTwoNums( a , b){
    try{
        isNumber(a ,b)
        console.log(a + b)
    }
    catch(err){
         console.log(err);
    }
    console.log("continue Execution")
}

function isNumber(a , b){
    if(typeof(a) != 'number'){
        throw new ReferenceError()
    }
    if(typeof(b) != 'number')
    {
        throw new ReferenceError()
    }
}
addTwoNums(5 , 5)

