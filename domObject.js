/** Adding Element to DOCUMENT OBJECT MODEL**/
const h2 = document.createElement('h2');
h2.innerText = "Mohamed Elgamal";
h2.setAttribute('id' , 'sub-heading');
h2.setAttribute('class' , 'heading');

document.body.appendChild(h2);
/** Select elements from document object model **/
let result = document.querySelector('p'); //return first p element found in the tree
let arrResult = document.querySelectorAll('p');//retun arr of p elements found in the tree
result = document.getElementById('sub-heading'); //return the specificed element with this matched id
arrResult = doucment.getElementsByClassName('heading');

/** Event Handling (Display message when clicking to anyplace in the body) **/
const bodyHolder = document.querySelector('body');
//callback that will be passed as argument to addEventListener
const callback = () =>{
    console.log("Body has been clicked");
};

bodyHolder.addEventListener('click' , callback);
/*addEventListener can take third paramaters which determine event mode and its a boolean variable 
default value is the false which means bubbling mode
true value means capturing mode  (don't use event.preventPropagation with this mode) */


/**Example (1)*/
let h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";

let input = document.createElement("input");
input.setAttribute("type" , "text");
document.body.innerText = "" ;//reset body tag from tags
input.addEventListener("change" , ()=>{
	h1.innerText = input.value;
})
document.body.appendChild(h1);
document.body.appendChild(input);


/**Example of Mahar Tech javascript course */
/**querySelector , querySelectorAll take css selector and return all elements that having same selector */
let elem = document.querySelector(".container") //return the first element in the html that has class container
elem = document.querySelectorAll(".container") //return a collection that contain all elements that have class container
// another example  : document.querySelector("input[type = 'text']")


//difference between innerHTML and innerText
//example
document.body.children[0].innerHTML = "<b> Hello World</b>";//in this line browser will add <b> to dom tree as b tag
// result will be displayed at screen will be "Hello World" with bold font
document.body.children[0].innerText = "<b> Hello World</b>" ; //will deal with this string as plaintext


document.getElementById("divone").className // will return the name of the class in this tag

document.getElementById("divone").classList.add("c2") //will add class c2 to that tag

document.getElementById("divone").classList.remove("c2");//will remove class c2 from the tag


document.getElementById("divone").style // will return the style values

getComputedStyle(document.getElementById("divone")).color // will return the text color of tag divone