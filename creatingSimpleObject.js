var person = {
    name : ["Mohamed" , "Elgamal"],
    age : 25,
    bio : function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old `);

    }
}
person.bio();
//summarzing syntax as follow
var person = {
    name : ["Mohamed" , "Elgamal"],
    age : 25,
    bio(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old `);

    }
}
person.bio()

//containing object inside object
const person1 = {
    name : {
        first : "Mohamed",
        second : "Elgamal",
        fullName(){
            console.log(`${person1.first} ${person1.second}`);
        }
    },
    firstName(){
        console.log(`${this.name.first}`);
    }
}
console.log(person1["name"]["first"])
console.log(person1["name"].first)
