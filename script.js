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
// This function adds the class depending on if it is the past, present, or future.
function timeTracker() {
  var timeNow = dayjs().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("hour").split("hour")[1]);

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


$("#hour-9 .time-block").val(localStorage.getItem("hour-9"));
$("#hour-10 .time-block").val(localStorage.getItem("hour-10"));
$("#hour-11 .time-block").val(localStorage.getItem("hour-11"));
$("#hour-12 .time-block").val(localStorage.getItem("hour-12"));
$("#hour-13 .time-block").val(localStorage.getItem("hour-13"));
$("#hour-14 .time-block").val(localStorage.getItem("hour-14"));
$("#hour-15 .time-block").val(localStorage.getItem("hour-15"));
$("#hour-16 .time-block").val(localStorage.getItem("hour-16"));
$("#hour-17 .time-block").val(localStorage.getItem("hour-17"));
timeTracker();






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

