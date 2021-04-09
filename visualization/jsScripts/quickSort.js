function sortQuickSort() {
  document.getElementById("sorting-btns").style.pointerEvents = "none";

  document.getElementById(
    "complexity"
  ).innerHTML = `<pre style="line-height: 30px; margin-top: 8%;">
    <span style="font-size:x-large;">Worst Case :  </span> <span style="font-size: xx-large;color:#3ddc84;">O(n²)
    </span>
    <span style="font-size:x-large;">Best Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O(n log n)
    </span>
    <span style="font-size:x-large;">Average Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O(n log n)
    </span></pre>`;

  document.getElementById("algorithm").innerHTML = `
    <pre style="font-size:.75rem: line-height:none">
QuickSort(arr, low, high){
    if (low < high){
        pivot_index = partition(arr, low, high);

        quickSort(arr, low, pivot_index - 1);  
        quickSort(arr, pivot_index + 1, high);
    }
}
</pre>`;

  document.getElementById("text").innerHTML = "Quick Sort";

  // window.setTimeout(() => {
  //   let STATUS =
  //     "<pre>Comparing \n" + getValue(j) + " and " + getValue(j + 1) + "</pre > ";
  //   statusCard.innerHTML = STATUS;
  // }, c_delay);
  // set delay to zero to start imidiatly
  c_delay = 0;

  // hide nav-bar
  var navBar = document.getElementById("navigation");
  navBar.style.display = "none";

  // to change btn styles
  var quickSortBtn = document.getElementById("Quick");
  quickSortBtn.disabled = true;
  quickSortBtn.classList.add("selected");

  //main algorithm
  quickSort(dataList, 0, dataList.length - 1);

  // revert btn style and nav-bar style

  window.setTimeout(() => {
    // makeLog("FINISHED");
    for (var index = 0; index < lenght; index++) {
      var div = document.getElementById(index.toString());
      div.style.backgroundColor = "#3ddc84".toString();
    }
    quickSortBtn.classList.remove("selected");
    quickSortBtn.disabled = false;
    navBar.style.display = "flex";
    document.getElementById("text").innerHTML = "Quick Sort";
    document.getElementById("sorting-btns").style.pointerEvents = "auto";
  }, (c_delay += delay_time));
}

function quickSort(dataList, start, end) {
  if (start < end) {
    p = partition(dataList, start, end);
    quickSort(dataList, start, p - 1);
    quickSort(dataList, p + 1, end);
  }
}

function partition(dataList, start, end) {
  let pivot = dataList[end];
  showSwapper("-", "-", pivot);

  change_color_single_div(end, "white");

  let pindex = start;
  for (let i = start; i < end; i++) {
    change_color_single_div(i, "#141414");
    if (dataList[i] < pivot) {
      let temp = dataList[i];
      dataList[i] = dataList[pindex];
      dataList[pindex] = temp;
      // change_color(i, pindex, "#3DDC84");
      swapper(i, pindex);
      showSwapper(dataList[i], dataList[pindex], pivot);
      pindex++;
    }
    change_color_single_div(i, "#F4B400");
  }
  change_color_single_div(end, "#F4B400");

  change_color(end, pindex, "#DB4437");

  let temp = dataList[end];
  dataList[end] = dataList[pindex];
  dataList[pindex] = temp;
  swapper(end, pindex);
  showSwapper(dataList[end], dataList[pindex], pivot);
  change_color(end, pindex, "#F4B400");
  change_color_single_div(pindex, "#3DDC84");
  return pindex;
}

function showSwapper(val1, val2, pivot) {
  window.setTimeout(() => {
    let STATUS =
      '<pre style="font-size:1.5rem;">swapping ' +
      val2 +
      " and " +
      val1 +
      "\n pivot:" +
      pivot +
      "</pre >";
    statusCard.innerHTML = STATUS;
  }, c_delay);
}
