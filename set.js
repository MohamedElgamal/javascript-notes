//set is a collection of unique values which means can't be there a repeated value
const dataSet = ['apple','pear','apple','pear','plum', 'apple'];
let test = new Set(dataSet);
console.log(test);
let call = function(data){
    data[1] ="بطيخ";
}
call(dataSet);
console.log(dataSet[1]);