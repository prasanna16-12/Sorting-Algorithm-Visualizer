function jumpSearch() {
  var value = document.getElementById("searchValue").value;
  if (value) {
    c_delay = 0;
    console.log(value);

    // hide nav-bar
    var navBar = document.getElementById("navigation");
    navBar.style.display = "none";
    // to change btn styles
    var jumpSearchBtn = document.getElementById("jmpSearch");
    jumpSearchBtn.disabled = true;
    jumpSearchBtn.classList.add("selected");

    // make btn dive unclickble
    document.getElementById("sorting-btns").style.pointerEvents = "none";

    //add complexity
    document.getElementById(
      "complexity"
    ).innerHTML = `<pre style="line-height: 30px; margin-top: 8%;">
      <span style="font-size:x-large;">Worst Case :  </span> <span style="font-size: xx-large;color:#3ddc84;">O( √n )
      </span>
      <span style="font-size:x-large;">Best Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( 1 )
      </span>
      <span style="font-size:x-large;">Average Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( √n )
      </span></pre>`;

    // add algorithm
    document.getElementById(
      "algorithm"
    ).innerHTML = `<pre id="algorithmLines" style="line-height: 33px;">
  blockSize = sqre(length)
  divide array in block
    for i in length
      if array[blockSize] == value:
        find value in that Block
      else:
        jump to next Block
  </pre>`;

    // sorting
    document.getElementById("text").innerHTML =
      '<div class="lds-facebook"><div></div><div></div><div></div></div>';
    quickSort(dataList, 0, dataList.length - 1);
    console.log(dataList);

    // main algorithm

    console.log(dataList);
    console.log(value);
    var index = jumpSearchAlgo(value);
    console.log(index);

    window.setTimeout(() => {
      // makeLog("FINISHED");
      jumpSearchBtn.classList.remove("selected");
      jumpSearchBtn.disabled = false;
      document.getElementById("sorting-btns").style.pointerEvents = "auto";

      navBar.style.display = "flex";
    }, (c_delay += delay_time));
  } else {
  }
}

// jump search ---------------------------------
function jumpSearchAlgo(value) {

  console.log(value);
  var dataLength = dataList.length;
  var blockSize = Math.floor(Math.sqrt(dataLength));


  window.setTimeout(() => {
    let STATUS = "<pre>Array is divided in Blocks of\n" + blockSize + "</pre > ";
    statusCard.innerHTML = STATUS;
  }, c_delay);

  console.log(dataLength, blockSize, dataLength / blockSize);


  // divide array in blocks
  window.setTimeout(() => {
    var color = "skyBlue";
    for (let index = 0; index < dataLength; index++) {
      if ((index % blockSize) === 0) {
        color = getRandomColor(index);
      }
      makePolesColorful(index, color);

    }
  }, (c_delay += delay_time));



  var left = 0;
  var right = blockSize;
  while (dataList[right] <= value && right < dataLength) {
    // the control will continue to jump the blocks 
    window.setTimeout(() => {
      let STATUS = "<pre>jump to next block\n" + "</pre > ";
      statusCard.innerHTML = STATUS;
    }, c_delay);
    change_color_single_div(right, "gray");
    left = right;  // shift the block
    right += blockSize;
    // console.log(startIndex);
    if (right > dataLength - 1) {
      right = dataLength;
    }  // if m exceeds the array size
  }
  window.setTimeout(() => {
    let STATUS = "<pre>Block found of\n" + "</pre > ";
    statusCard.innerHTML = STATUS;
  }, c_delay);
  change_color_single_div(right, "gray");
  for (let index = left; index < right; index++) {
    window.setTimeout(() => {
      let STATUS = "<pre>comparing Valuse of with\n" + value + "</pre > ";
      statusCard.innerHTML = STATUS;
    }, c_delay);
    change_color_single_div(index, "red");
   console.log(index);
    if (dataList[index] == value) {
      change_color_single_div(index, "springGreen");
      window.setTimeout(() => {
        let STATUS = "<pre>value found at index\n" + index + "</pre > ";
        statusCard.innerHTML = STATUS;
      }, c_delay);
      return index;
    }
    
  }

  return -1;
}

// QuickSort -----------------------------------
function quickSort(dataList, start, end) {
  if (start < end) {
    p = partition(dataList, start, end);
    quickSort(dataList, start, p - 1);
    quickSort(dataList, p + 1, end);
  }
}

function partition(dataList, start, end) {
  let pivot = dataList[end];
  let pindex = start;
  for (let i = start; i < end; i++) {
    if (dataList[i] < pivot) {
      let temp = dataList[i];
      dataList[i] = dataList[pindex];
      dataList[pindex] = temp;
      swapper200ms(i, pindex);
      pindex++;
    }
  }

  let temp = dataList[end];
  dataList[end] = dataList[pindex];
  dataList[pindex] = temp;
  swapper200ms(end, pindex);
  return pindex;
}

function makePolesColorful(i, color) {
  document.getElementById(
    i.toString()
  ).style.backgroundColor = color;
}

var colorArray = ['#3366E6', '#CCFF1A', '#B34D4D', '#A96633', '#FFB399', '#FFFF99', '#00B3E6',
  '#999966',
  , '#E6B3B3',
];

function getRandomColor(index) {
  return colorArray[(index % colorArray.length)];
}

