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

    
    // get all algorithm lines
    var line1 = document.getElementById("declaration");
    var line2 = document.getElementById("loop");
    var line3 = document.getElementById("condition");
    var line4 = document.getElementById("swap");
 

    line1.classList.add("highlight");
    window.setTimeout(() => {
        line1.classList.remove("highlight");
    }, c_delay);



    for (let index = 0; index < totalBars - 1; index++) {

        for (let j = 0; j < totalBars - index - 1; j++) {
            // change color of selected bars to red for comparison 
            change_color(j, j + 1, "#DB4437");
            
            // highlighting line 1
            line2.classList.add("highlight");
            window.setTimeout(() => {
                line2.classList.remove("highlight");
            }, c_delay);

            // showing status in status card ( compairig )
            window.setTimeout(() => {
                let STATUS =
                    "<pre>Comparing \n"
                    + getValue(j) + " and " + getValue(j + 1) + "</pre > ";
                statusCard.innerHTML = STATUS;
            }, c_delay);
            
            if (dataList[j] > dataList[j + 1]) {

                // highlighting line3
                window.setTimeout(() => {
                    line3.classList.add("highlight");
                }, c_delay);


                // showing status in status card ( swapping )
                window.setTimeout(() => {
                    let STATUS =
                        "<pre>Swapping \n"
                        + getValue(j) + "&nbsp-&nbsp" + getValue(j + 1) + "</pre > ";
                    statusCard.innerHTML = STATUS;
                }, c_delay);

                
                window.setTimeout(() => {
                    line4.classList.add("highlight");
                }, c_delay);
                //swapping element 
                var temp = dataList[j + 1];
                dataList[j + 1] = dataList[j];
                dataList[j] = temp;


                swapper(j, j + 1);
                window.setTimeout(() => {
                    line4.classList.remove("highlight");
                }, c_delay);
                
                //removing highlighted line3
                window.setTimeout(() => {
                    line3.classList.remove("highlight");
                }, c_delay);
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