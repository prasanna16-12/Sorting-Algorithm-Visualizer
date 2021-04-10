function linearSearch() {
  var value = document.getElementById("searchValue").value;
  if (value && value <= rangeSlider.value) {
    c_delay = 0;
    value = Number(value);
    // hide nav-bar
    var navBar = document.getElementById("navigation");
    navBar.style.display = "none";
    // to change btn styles
    var binSearchBtn = document.getElementById("linSearch");
    binSearchBtn.disabled = true;
    binSearchBtn.classList.add("selected");

    // make btn dive unclickble
    document.getElementById("sorting-btns").style.pointerEvents = "none";

    //add complexity
    document.getElementById(
      "complexity"
    ).innerHTML = `<pre style="line-height: 30px; margin-top: 8%;">
      <span style="font-size:x-large;">Worst Case :  </span> <span style="font-size: xx-large;color:#3ddc84;">O( n )
      </span>
      <span style="font-size:x-large;">Best Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( 1 )
      </span>
      <span style="font-size:x-large;">Average Case : </span> <span style="font-size: xx-large;color:#3ddc84;">O( n )
      </span></pre>`;

    // add algorithm
    document.getElementById(
      "algorithm"
    ).innerHTML = `<pre id="algorithmLines" style="line-height: 33px;margin-top:1rem">
  linearSearch()
    for i in data Array :
      if  i == val :
        return indexOf(i)
    return -1
  </pre>`;

    document.getElementById("text").innerHTML = "Linear Search";

    //main algorithm
    let _index = 0;
    for (let index = 0; index < dataList.length; index++) {
      change_color_single_div(index, "red");
      if (dataList[index] === value) {
        _index = index;
        window.setTimeout(() => {
          document.getElementById(
            "text"
          ).innerHTML = `${value} found at index ${_index} :)`;
        }, (c_delay += delay_time));
        change_color_single_div(index, "springGreen");

        break;
      }
      change_color_single_div(index, "#f4b400");
    }
    console.log(_index);

    window.setTimeout(() => {
      // makeLog("FINISHED");
      binSearchBtn.classList.remove("selected");
      binSearchBtn.disabled = false;
      document.getElementById("sorting-btns").style.pointerEvents = "auto";

      navBar.style.display = "flex";
    }, (c_delay += delay_time));
  } else {
  }
}
