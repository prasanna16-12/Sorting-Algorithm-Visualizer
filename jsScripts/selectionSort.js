function sortSelectionSort() {
  console.log("hii");
  // set delay to zero to start imidiatly
  c_delay = 0;

  console.log(delay_time);
  // hide nav-bar
  var navBar = document.getElementById("navigation");
  navBar.style.display = "none";
  // to change btn styles
  var selectionSortBtn = document.getElementById("Selection");
  selectionSortBtn.disabled = true;
  selectionSortBtn.classList.add("selected");

  // make btn dive unclickble
  document.getElementById("sorting-btns").style.pointerEvents = "none";

  //add complexity
  document.getElementById(
    "complexity"
  ).innerHTML = `<pre style="line-height: 30px; margin-top: 8%;">
    <span style="font-size:x-large;">Worst Case :  </span> <span style="font-size: xx-large;color:#3ddc84;">O( n² )
    </span>
    <span style="font-size:x-large;">Best Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( n² )
    </span>
    <span style="font-size:x-large;">Average Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( n² )
    </span></pre>`;

  // add algorithm
  document.getElementById(
    "algorithm"
  ).innerHTML = `<pre id="algorithmLines" style="line-height: 39px;">
repeat (numOfElements - 1) times
  set the first unsorted element as the minimum
  for each of the unsorted elements
    if element < currentMinimum
      set element as new minimum
  swap minimum with first unsorted position
</pre>`;

  document.getElementById("text").innerHTML = "Insertion Sort Visualization";

  // main algorithm

  let key = 0;
  let minIndex = 0;
  console.log(dataList);
  for (let i = 0; i < dataList.length; i++) {
    minIndex = i;
    window.setTimeout(() => {
      let STATUS =
        "<pre>"+
        "\nnumber to be swapped - " +
        getValue(i) +
        "</pre > ";
      statusCard.innerHTML = STATUS;
    }, c_delay);
    change_color_single_div(i, "black");

    for (let j = i + 1; j < dataList.length; j++) {
      change_color_single_div(j, "red");

      if (dataList[minIndex] > dataList[j]) {
        window.setTimeout(() => {
          let STATUS =
            "<pre>minimum value - " +
            getValue(j) +
            "\nnumber to be swapped - " +
            getValue(i) +
            "</pre > ";
          statusCard.innerHTML = STATUS;
        }, c_delay);
        minIndex = j;
      }
      change_color_single_div(j, "#f4b400");
    }
    if (minIndex !== i) {
      window.setTimeout(() => {
        let STATUS = "<pre>Swapping \n" + "</pre > ";
        statusCard.innerHTML = STATUS;
      }, c_delay);
      [dataList[i], dataList[minIndex]] = [dataList[minIndex], dataList[i]];

      swapper(i, minIndex);
    }
    change_color_single_div(i, "#3DDC84");
  }
  console.log(dataList);

  window.setTimeout(() => {
    // makeLog("FINISHED");
    selectionSortBtn.classList.remove("selected");
    selectionSortBtn.disabled = false;
    let STATUS = "<pre>Selection Sort</pre > ";
    statusCard.innerHTML = STATUS;

    document.getElementById("sorting-btns").style.pointerEvents = "auto";

    navBar.style.display = "flex";
  }, (c_delay += delay_time));
}
