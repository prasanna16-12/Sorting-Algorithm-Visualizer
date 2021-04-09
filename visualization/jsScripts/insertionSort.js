function sortInsertionSort() {
  // set delay to zero to start imidiatly
  c_delay = 0;

  if (delay_time <= 100) {
    delay_time = 200;
    speedSlider.value = 2;
    document.getElementById("speedStatus").innerHTML = delay_time;
  }
  console.log(delay_time);
  // hide nav-bar
  var navBar = document.getElementById("navigation");
  navBar.style.display = "none";
  // to change btn styles
  var insertionSortBtn = document.getElementById("Insertion");
  insertionSortBtn.disabled = true;
  insertionSortBtn.classList.add("selected");

  // make btn dive unclickble
  document.getElementById("sorting-btns").style.pointerEvents = "none";

  //add complexity
  document.getElementById(
    "complexity"
  ).innerHTML = `<pre style="line-height: 30px; margin-top: 8%;">
    <span style="font-size:x-large;">Worst Case :  </span> <span style="font-size: xx-large;color:#3ddc84;">O( n² )
    </span>
    <span style="font-size:x-large;">Best Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( n )
    </span>
    <span style="font-size:x-large;">Average Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( n² )
    </span></pre>`;

  // add algorithm
  document.getElementById("algorithm").innerHTML = `<pre id="algorithmLines">
mark first element as sorted
for each unsorted element X
  'extract' the element X
  for j = lastSortedIndex down to 0
    if current element j > X
      move sorted element to the right by 1
    break loop and insert X here
</pre>`;

  document.getElementById("text").innerHTML = "Insertion Sort Visualization";

  // main algorithm

  for (let i = 1; i < totalBars; i++) {
    var key = dataList[i];

    for (let j = i - 1; j >= 0; j--) {
      if (key < dataList[j]) {
        change_color(j, j + 1, "#DB4437");

        window.setTimeout(() => {
          let STATUS =
            "<pre>" +
            getValue(j + 1) +
            " is shifting to left"+
            "\n key: " +
            getValue(j + 1) +
            "</pre > ";
          statusCard.innerHTML = STATUS;
        }, c_delay);
        var temp = dataList[j];
        dataList[j] = dataList[j + 1];
        dataList[j + 1] = temp;
        swapper(j, j + 1);
        change_color(j, j + 1, "#3DDC84");
      } else {
        break;
      }
    }
  }
    change_color_single_div(0, "#3DDC84");
  console.log(dataList);

  window.setTimeout(() => {
    // makeLog("FINISHED");
    insertionSortBtn.classList.remove("selected");
    insertionSortBtn.disabled = false;
    let STATUS = "<pre>Insertion Sort</pre > ";
    statusCard.innerHTML = STATUS;

    document.getElementById("sorting-btns").style.pointerEvents = "auto";

    navBar.style.display = "flex";
  }, (c_delay += delay_time));
}
