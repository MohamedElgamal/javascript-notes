//Destructing is used to extract data from the object into a variable but the variable should have the same name of the property
let {PI} = Math;
console.log(PI);

var object = {
    name : 'Mohamed Elgamal'
}

let {name} = object;

console.log(name);

console.log(name === object.name);

