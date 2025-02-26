var toggled = false; 

var hTag = document.querySelector("h1");
var bodyTag = document.querySelector('body');
var circle = document.querySelector("#circle");

document.querySelector("#toggle-button").onclick = function () {  
    if(!toggled) {
        hTag.classList.add("colorWhite");
        bodyTag.classList.add("colorBlack");
        circle.classList.add("darkMode")

        toggled = true;
    } else {
        hTag.classList.remove("colorWhite");
        bodyTag.classList.remove("colorBlack");
        circle.classList.remove("darkMode")
        toggled = false;
    } 
}