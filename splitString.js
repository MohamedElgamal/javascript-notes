/*In this example we will work in extracting cookies information and load it into variable */

var cookieHolder = {};

var cookieValues = document.cookie;//get saved cookie
/***indexOf , substring , split */
var key , value ,nextStart = 0;
for(var i = 0 ; i < cookieValues.length ; i++){
    if(cookieValues[i] == ";" || i == cookieValues.length - 1){
        key = cookieValues.substring(nextStart , i).split("=")[0].trim();
        value = cookieValues.substring(nextStart , i).split("=")[1].trim();
        nextStart = i + 1;
        cookieHolder[key] = value;
    }
}
console.log(cookieHolder);