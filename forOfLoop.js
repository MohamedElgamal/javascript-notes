let object = { 
    firstName : "Mohamed",
    lastName : "Elgamal",
    nickName : "gamal",
    age : "25",
}

var properties = Object.keys(object);
for(property of properties){
    console.log(property);
}
//this example is to used for of to loop over properties values
for(property of properties){
    console.log(object[property])
}
var values = Object.values(object);
// console.log(values)

var entites = Object.entries(object);
console.log(entites[0][2]);
console.log("-----------------------");
//using normal loop to iterate over entries
for(var i = 0 ; i < entites.length ; i++){
    console.log(entites[i][1]);
}
