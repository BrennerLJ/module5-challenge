// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    window.setTimeout("index.html_load()", 50);
});

// This function displays the current date on the top of the webpage.
window.onload = function() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];;
  var date = new Date();

  document.getElementById("date").innerHTML = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
};

$(function() {
  var time = new time;
  $("<textarea/>").each(function() {
    var specifiedTime = $(this).data("time");
    specifiedTime = Date.parse(specifiedTime);
    if (specifiedDate == currentDate) {
      $(this).addClass("present");      
    } else if (currentDate > specifiedDate) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });
});

function setBg() {
  var time = specifiedTime;
  if (specifiedTime == currentTime) {
    $(this).addClass(".present");
  } else if (specifiedTime > currentTime) {
    $(this).addClass(".past");
  } else {
    $(this).addClass(".future");
  }
}

$(document).ready(function() {

  $(".saveBtn").on("click", function() {
      event.preventDefault();
    localStorage.setItem($(this).prop("hour-9"), $(this).prev().val());
    console.log(localStorage.getItem($(this).prop("hour-9")));

  })
})




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

