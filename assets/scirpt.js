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
    $("#Today").text(today.format("dddd, MMM Do"));
};

