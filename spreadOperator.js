//spread operator spread (expand ) array into its elements 
//1- add element of existing array into a new array
let arr1 = ['Algorithms &  Data Structure' , 'Front End Libraries'];
let arr2 = ['Responsive Web Design' , ...arr1 , 'Data Visualization' , 'APIs and MicroSerivces'];
console.log(arr2);
//2- passing element of array as arguments to a function
let nums = [0 , 1 , 2 ,3];
function addThreeNumber(x , y , z){
    console.log(`the sum is : ${x + y + z}`);//backtick operator
}
//old way
addThreeNumber(nums[0] , nums[1] , nums[2]);
//using spread operator no need to mention each index to pass the value
addThreeNumber(...nums);
//3-copy array items to new array 
let arr3 = [1 , 2 , 3];
let arr4 = [...arr3];
console.log(arr4);
//4-concatenate arrays
let cat1 = [0 , 1 ,2];
let cat2 = [3 , 4 , 5 , 6 ]
//old way ES5
console.log( cat1.concat(cat2));
//using spread operator 
cat1 = [...cat1 , ...cat2];
console.log(cat1)
//used to spread string to array elememts
var data = "Mohamed Elgamal";
var data = [...data];
console.log(data)
//used to join two objects properties together
const flying = {
    wings  : 2 ,
    canFly : function(){
        console.log(`it has ${this.wings} wings then it can fly`);
    }
}
const car = { 
    wheels : 4
}

const flyingCar = {...flying , ...car};
console.log(flyingCar)

const meal = ["soup", "steak", "ice cream"]
let [...one] = meal;
console.log(one);