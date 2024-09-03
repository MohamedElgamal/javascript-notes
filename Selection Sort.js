let arr = [7,69,2,221,8974] ;
for( let i = 0 ; i < arr.length ; i++){
    let location = i ;
    let value = arr[i];
    for(let j = i + 1 ; j < arr.length ; j++){
        if(value > arr[j]){
            value = arr[j];
            location = j;
        }
    }
    arr[location] = arr[i];
    arr[i] = value;
}
console.log(arr)