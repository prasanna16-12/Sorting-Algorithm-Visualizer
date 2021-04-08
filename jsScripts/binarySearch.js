function binarySearch() {
  var value = document.getElementById("searchValue").value;
  console.log(value);
  // set delay to zero to start imidiatly
  c_delay = 0;

  // hide nav-bar
  var navBar = document.getElementById("navigation");
  navBar.style.display = "none";
  // to change btn styles
  var binSearchBtn = document.getElementById("submitBtn");
  binSearchBtn.disabled = true;
  binSearchBtn.classList.add("selected");

  // make btn dive unclickble
  document.getElementById("sorting-btns").style.pointerEvents = "none";

  //   //add complexity
  //   document.getElementById(
  //     "complexity"
  //   ).innerHTML = `<pre style="line-height: 30px; margin-top: 8%;">
  //     <span style="font-size:x-large;">Worst Case :  </span> <span style="font-size: xx-large;color:#3ddc84;">O( n² )
  //     </span>
  //     <span style="font-size:x-large;">Best Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( n² )
  //     </span>
  //     <span style="font-size:x-large;">Average Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( n² )
  //     </span></pre>`;

  //   // add algorithm
  //   document.getElementById(
  //     "algorithm"
  //   ).innerHTML = `<pre id="algorithmLines" style="line-height: 39px;">
  // repeat (numOfElements - 1) times
  //   set the first unsorted element as the minimum
  //   for each of the unsorted elements
  //     if element < currentMinimum
  //       set element as new minimum
  //   swap minimum with first unsorted position
  // </pre>`;

  // sorting
  document.getElementById("text").innerHTML = "Sorting data";
  quickSort(dataList, 0, dataList.length - 1);
  console.log(dataList);

  window.setTimeout(() => {
    c_delay = 0;
  }, (c_delay += delay_time));
  // main algorithm
  
  console.log(dataList);
  var index = binSearch(dataList, 0, dataList.length - 1, value);
  console.log(index);
  //   let key = 0;

  window.setTimeout(() => {
    // makeLog("FINISHED");
    binSearchBtn.classList.remove("selected");
    binSearchBtn.disabled = false;
    document.getElementById("sorting-btns").style.pointerEvents = "auto";

    navBar.style.display = "flex";
  }, (c_delay += delay_time));
}

function binSearch(list, start, end, value) {
  if (end >= start) {
    let mid = Math.floor((start + end) / 2);
    window.setTimeout(() => {
      let STATUS = "<pre>mid = " + getValue(mid) + "</pre > ";
      statusCard.innerHTML = STATUS;
    }, c_delay);
    change_color_single_div(mid, "red");
    if (list[mid] == value) {
      window.setTimeout(() => {
        let STATUS =
          "<pre>" + value + " found at index :" + mid + " :)</pre > ";
        statusCard.innerHTML = STATUS;
      }, (c_delay += delay_time));
      // element is present at left side
      change_color_single_div(mid, "springGreen");
      return mid;
    } else if (list[mid] > value) {
      window.setTimeout(() => {
        let STATUS = "<pre>mid = " + getValue(mid) + " > " + value + "</pre > ";
        statusCard.innerHTML = STATUS;
      }, c_delay);
      // element is present at left side
      window.setTimeout(() => {
        let STATUS = "<pre>mid = " + getValue(mid) + " < " + value + "</pre > ";
        statusCard.innerHTML = STATUS;
      }, c_delay);
      makePolesBlack(mid, end);
      return binSearch(list, start, mid - 1, value);
    } else {
      // element is present at right side
      makePolesBlack(start, mid);
      return binSearch(list, mid + 1, end, value);
    }
  } else {
    window.setTimeout(() => {
      let STATUS = "<pre>Data not Found :(</pre > ";
      statusCard.innerHTML = STATUS;
    }, (c_delay += delay_time));
    return -1;
  }
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

function makePolesBlack(i, j) {
  console.log(i, j);
  window.setTimeout(() => {
    for (let index = i; index <= j; index++) {
      document.getElementById(
        index.toString()
      ).style.backgroundColor = "#111".toString();
    }
  }, (c_delay += delay_time));
}