// is a build in function in array object to iterate over it
//we send to forEach function a callback to call this function in every iteration 
let arr = ["orange" , "mango" , "bananaa"]
arr.forEach((value , index) =>{
    console.log(`value : ${value} at ${index}`);
})

arr.filter((item) => {
    console.log((item == "bananaa" ? false : true));
    return (item == "bananaa" ? false : true);
})

console.log(arr);