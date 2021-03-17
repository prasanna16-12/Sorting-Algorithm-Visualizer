const ENABLE = "enable";
const DISABLE = "disable";

// global element for containeer
const parent = document.getElementById("containeer");

// gobal element for showing log 
const log = document.getElementById("log");

var delay_time = 100;        
var c_delay = 0;


// status card
var statusCard = document.getElementById("status");

// lenth ,range ,speed sliders 
var rangeSlider = document.getElementById("range");
var lenghtSlider = document.getElementById("lenght");
var speedSlider = document.getElementById("speed");


// taking range and lenght to set random data 
rangeSlider.oninput = function () {
    generateData(lenghtSlider.value, this.value);
}
lenghtSlider.oninput = function () {
    generateData(this.value, rangeSlider.value);
}


// set speed will set speed upon user input function is present in animation.js
// speedSlider.addEventListener("input", setSpeed);


// total bar count
var totalBars = 0;

// list to be sorted
var dataList = [];



/////////////////// HELPER FUNCTIONS ////////////////////////

// function to convert value of array in to number
function number(value) {
    return Number(value);
}

// function to remove all child elements to clear containeer
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// generate random numbers....................
function random(range) {
    return Math.floor((Math.random() * range) + 1);
}



