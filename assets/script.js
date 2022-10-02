let timeBlocks = $("textarea");
let buttonParent = document.querySelector(".container");
// local storage
let old7 = localStorage.getItem("7AM)");
let old8 = localStorage.getItem("8AM)");
let old9 = localStorage.getItem("9AM)");
let old10 = localStorage.getItem("10AM)");
let old11 = localStorage.getItem("11AM)");
let old12 = localStorage.getItem("12PM)");
let old13 = localStorage.getItem("1PM)");
let old14 = localStorage.getItem("2PM)");
let old15 = localStorage.getItem("3PM)");

// using moment.js for Date/Time
function time() {
    let today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do YYYY"));
};

// creating for loop to go through each block time
// if statement to add color

function checkTime() {
    let currentTime = moment().format("H");
    $("textarea").removeClass("present past future");

    for (let i = 0; i < timeBlocks.length; i++) {
        letcalTime = timeBlocks[i].id;

    if(currentTime < calTime){
            $(timeBlocks[i]).addClass("future");
    } else if(currentTime > calTime){
            $(timeBlocks[i]).addClass("past");
    } else{
            $(timeBlocks[i]).addClass("present");

        }
    }
}

// every 1 minute updates
    setInterval(function(){
        time();
        checkTime();
    }, 60000);

    function display(){
        // local storage

        if (old7 != ""){
            timeBlocks[0].textContent = old7;
        }
        if (old8 != ""){
            timeBlocks[1].textContent = old8;
        }
        if (old9 != ""){
            timeBlocks[2].textContent = old9;
        }
        if (old10 != ""){
            timeBlocks[3].textContent = old10;
        }
        if (old11 != ""){
            timeBlocks[4].textContent = old11;
        }
        if (old12 != ""){
            timeBlocks[5].textContent = old12;
        }
        if (old13 != ""){
            timeBlocks[6].textContent = old13;
        }
        if (old14 != ""){
            timeBlocks[7].textContent = old14;
        }
        if (old15 != ""){
            timeBlocks[8].textContent = old15;
        }
    }
    
    // adding an event listener for all save buttons
    // save data to local storage
    $(".saveBtn").on("click", function(event){
        localStorage.setItem(event.target.parentNode.children[0].innerText, event.target.previousElementSibling.value);
        display();
    })

    time();
    checkTime();
    display();