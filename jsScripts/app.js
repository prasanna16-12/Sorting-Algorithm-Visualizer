const ENABLE = "enable";
const DISABLE = "disable";

// global element for containeer
const parent = document.getElementById("containeer");

// gobal element for showing log
const log = document.getElementById("log");

var delay_time = 200;
var c_delay = 0;

// status card
var statusCard = document.getElementById("text");

// lenth ,range ,speed sliders
var rangeSlider = document.getElementById("range");
var lenghtSlider = document.getElementById("lenght");
var speedSlider = document.getElementById("speed");
var lenght = 10;
// taking range and lenght to set random data
rangeSlider.oninput = function () {
  document.getElementById("rangeStatus").innerHTML = this.value;
  generateData(lenghtSlider.value, this.value);
};
lenghtSlider.oninput = function () {
    document.getElementById("lenghtStatus").innerHTML = this.value;
    lenght = this.value;
  generateData(this.value, rangeSlider.value);
};

speedSlider.oninput = function () {
  switch (this.value) {
    case "1":
      delay_time = 100;
      console.log(delay_time);
      break;
    case "2":
      delay_time = 200;
      console.log(delay_time);
      break;
    case "3":
      delay_time = 300;
      console.log(delay_time);
      break;
    case "4":
      delay_time = 500;
      console.log(delay_time);
      break;
    case "5":
      delay_time = 1000;
      console.log(delay_time);
      break;
    default:
      delay_time = 300;
      console.log(delay_time);
      break;
  }
  document.getElementById("speedStatus").innerHTML = delay_time;
};

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
  return Math.floor(Math.random() * range + 1);
}
