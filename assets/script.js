$(document).ready(function () {
    
    // using moment.js for Date/Time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

 // adding an event listener for all save buttons to save data to local storage
    $(".saveBtn").on("click", function() {
        // THIS INITIALIZES A VARIABLE
        let Block_period = $(this).siblings(".description").val();
        let Material = $(this).parent().attr("id");
        localStorage.setItem(Material, Block_period);
    })

// local storage
$("#7oclock .description").val(localStorage.getItem("7oclock"));
$("#8oclock .description").val(localStorage.getItem("8oclock"));
$("#9oclock .description").val(localStorage.getItem("9oclock"));
$("#10oclock .description").val(localStorage.getItem("10oclock"));
$("#11oclock .description").val(localStorage.getItem("11oclock"));
$("#12oclock .description").val(localStorage.getItem("12oclock"));
$("#1oclock .description").val(localStorage.getItem("1oclock"));
$("#2oclock .description").val(localStorage.getItem("2oclock"));
$("#3oclock .description").val(localStorage.getItem("3oclock"));

// using moment.js for Date/Time
function PeriodNote() {
    let Now = moment().hour(); 


// creating for loop to go through each block time
// if statement to add color

    $(".time-block").each(function () {
        let TimeFrame = parseInt($(this).attr("id").split("hour")[1]);
        // console.log(TimeFrame, Now)
        if (TimeFrame < Now) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (TimeFrame === Now) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }

        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })}
 PeriodNote();})