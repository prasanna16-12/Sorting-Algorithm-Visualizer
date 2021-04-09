// function called when taking data as list
function getData() {

    // clearing containeer
    removeAllChildNodes(parent);
    log.style.display = "none";

    //input from user as comma seperated list
    var data = document.getElementById("inputNumber").value;
  
    var list = [];
    list = data.split(",");
    console.log(list);
    createBars(list)
}

// creating dynamic bars from list
function createBars(list) {

    var background = document.getElementById("containeer");

    // converting list to numbers
    list = list.map(number);
    // main list 
    dataList = [];
    list.forEach(element => {
        dataList.push(element);
    });
    console.log(dataList);

    // finding largest element
    var max = Number.MIN_VALUE;
    for (let index = 0; index < list.length; index++) {
        var element = list[index];
        if (element > max) {
            max = element;
        }
    }

    // finding constant for height
    var constant = 200 / max;


    // iterating over array to create bars
    var cnt = 0;
    list.forEach(element => {
        // crating div dynamically
        var div = document.createElement("div");

        div.setAttribute("class", "pole");

        div.setAttribute("id", cnt.toString());
        cnt++;
        totalBars = cnt
        // setting up height
        var height = constant * element;
        var strHeight = height.toString() + "px";
        div.style.height = strHeight;
        var span = document.createElement("span");
        span.setAttribute("class", "barSize");
        span.innerHTML = element;

        // appending elements
        div.appendChild(span);
        background.appendChild(div);
    });

}

function generateData(lenght = 10, range = 10) {

    log.style.display = "none";

    document.getElementById("rangeStatus").innerHTML = range;
    document.getElementById("lenghtStatus").innerHTML = lenght;

    
    removeAllChildNodes(parent);
    var list = [];
    for (let index = 0; index < lenght; index++) {
        var number = random(range);
        list.push(number);
    }
    createBars(list);
    // document.getElementById("sort").disabled = false;

}

window.generateData(10, 10);