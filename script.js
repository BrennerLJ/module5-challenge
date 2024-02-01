// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    window.setTimeout("index.html_load()", 50);
});

// This displays the current date on the top of the webpage using dayjs format.
$("#currentDay").text(dayjs().format("dddd, MMMM DD"));

//This function saves user input in the textarea to local storage.
$(document).ready(function() {
  
  $(".saveBtn").on("click", function() {
      event.preventDefault();
    localStorage.setItem($(this).prop("hour-9"), $(this).prev().val());
    console.log(localStorage.getItem($(this).prop("hour-9")));

  })
})

$("div").addClass("past");
$("div").addClass("present");
$("div").addClass("future");

const currentHour = dayjs().hour();

$(".row time-block").each(function() {
  const blockHour = parstInt($(this).attr("id").split("-")(1));

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});


function timeTracker() {
  var timeNow = moment().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime > timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}

timeTracker();
// document.addEventListener("DOMContentLoaded", function() {
//   var currentHour = new Date().getHours();

//   var workdayStart = ("#hour-9");
//   var workdayEnd = ("#hour-11");
  
//   for (var hour = workdayStart; hour <= workdayEnd; hour++) {
//     var timeBlock = document.createElement("div");
//     timeBlock.textContent = hour + ":00";
  
//     if (hour < currentHour) {
//       timeBlock.classList.add('past');
//     } else if (hour === currentHour) {
//       timeBlock.classList.add('present');
//     } else {
//       timeBlock.classList.add('future');
//     }
//   }  
// });





  //Everything is rendered.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

