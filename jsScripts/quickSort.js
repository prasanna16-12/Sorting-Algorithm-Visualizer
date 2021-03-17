function sortQuickSort() {
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
    quickSort(dataList, 0, dataList.length-1);

    // revert btn style and nav-bar style
    console.log(dataList);
    window.setTimeout(() => {
        // makeLog("FINISHED");
        quickSortBtn.classList.remove("selected");
        quickSortBtn.disabled = false;
        navBar.style.display = "flex";

    }, c_delay += delay_time);
   
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

    change_color_single_div(end, "white");

    let pindex = start;
    for (let i = start; i < end; i++){
        change_color_single_div(i, "#141414");
        if (dataList[i] <= pivot) {
            let temp = dataList[i];
            dataList[i] = dataList[pindex];
            dataList[pindex] = temp;
            // change_color(i, pindex, "#3DDC84");
            swapper(i, pindex);
            pindex++;
        }
        change_color_single_div(i, "#F4B400");
    }
    change_color_single_div(end, "#F4B400");

    change_color(end,pindex, "#DB4437");

    let temp = dataList[end];
    dataList[end] = dataList[pindex];
    dataList[pindex] = temp;
    swapper(end, pindex);
    change_color(end, pindex, "#F4B400");
    return pindex
}