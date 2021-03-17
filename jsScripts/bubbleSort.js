function sortBubbleSort() {
    // set delay to zero to start imidiatly
    c_delay = 0;

    // hide nav-bar
    var navBar = document.getElementById("navigation");
    navBar.style.display = "none";
    // to change btn styles
    var bubbleSortBtn = document.getElementById("Bubble");
    bubbleSortBtn.disabled = true;
    bubbleSortBtn.classList.add("selected");


    for (let index = 0; index < totalBars - 1; index++) {

        for (let j = 0; j < totalBars - index - 1; j++) {
            // change color of selected bars to red for comparison 
            change_color(j, j + 1, "#DB4437");
            window.setTimeout(() => {
                let STATUS =
                    "<pre>Comparing \n"
                    + getValue(j) + " and " + getValue(j + 1) + "</pre > ";
                statusCard.innerHTML = STATUS;
            }, c_delay);
            if (dataList[j] > dataList[j + 1]) {

                window.setTimeout(() => {
                    let STATUS =
                        "<pre>Swapping \n"
                        + getValue(j) + "&nbsp-&nbsp" + getValue(j + 1) + "</pre > ";
                    statusCard.innerHTML = STATUS;
                }, c_delay);


                //swapping element 
                var temp = dataList[j + 1];
                dataList[j + 1] = dataList[j];
                dataList[j] = temp;

                swapper(j, j + 1);




            }
            // change color back to yellow 
            change_color(j, j + 1, "#F4B400");

        }

        // change color to green for last element which is sorted
        change_color_single_div(totalBars - index - 1, "#3DDC84");

    }

    // after completion of algo change color of last bar remaining at index zero
    change_color_single_div(0, "#3DDC84");


    // this will wait till algorithm finishes and then proceed
    window.setTimeout(() => {
        // makeLog("FINISHED");
        bubbleSortBtn.classList.remove("selected");
        bubbleSortBtn.disabled = false;
        let STATUS =
            "<pre>Bubble Sort \n Finished</pre > ";
        statusCard.innerHTML = STATUS;


        navBar.style.display = "flex";

    }, c_delay += delay_time);

}