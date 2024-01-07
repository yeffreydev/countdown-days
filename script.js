let $ = document;
let totalYearDays = (new Date("01-01-2025").getTime() / 1000 / 60 / 60 / 24 - new Date("01-01-2024").getTime() / 1000 / 60 / 60 / 24).toFixed();

let daysFilled = totalYearDays - (new Date("01-01-2025").getTime() / 1000 / 60 / 60 / 24 - new Date(Date.now()).getTime() / 1000 / 60 / 60 / 24).toFixed();
daysFilled++;

console.log(daysFilled);

let fullString = totalYearDays - daysFilled + " days for end 2024.";

$.getElementById("content").innerHTML = fullString;

$.getElementById("days-filled").innerHTML = daysFilled;
$.getElementById("days-remaining").innerHTML = totalYearDays - daysFilled;

//marquee
//months.
let currentDate = new Date();
let remainigMonths = 12 - currentDate.getMonth() - 1;
//days.
let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
let remainigDays = lastDayOfMonth.getDate() - currentDate.getDate();
//hours
let endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);
let timeDifferenceInMilliseconds = endOfDay - currentDate;
let remainingHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);
//minutes
var endOfHour = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours() + 1, 0, 0);
var timeDifferenceInMillisecondsForMinutes = endOfHour - currentDate;
var remainingMinutes = timeDifferenceInMillisecondsForMinutes / (1000 * 60);

let stringRemaining = remainigMonths + " months, " + remainigDays.toFixed(0) + " days," + remainingHours.toFixed(0) + " hours, " + remainingMinutes.toFixed(0) + " minutes for 2025";
if (remainigMonths <= 0) {
  stringRemaining = remainigDays.toFixed(0) + " days," + remainingHours.toFixed(0) + " hours, " + remainingMinutes.toFixed(0) + " minutes for 2025";
}
if (remainigMonths <= 0 && remainigDays <= 0) {
  stringRemaining = remainingHours.toFixed(0) + " hours, " + remainingMinutes.toFixed(0) + " minutes for 2025";
}
if (remainigMonths <= 0 && remainigDays <= 0 && remainingHours <= 0) {
  stringRemaining = remainingMinutes.toFixed(0) + " minutes for 2025";
}
if (remainigMonths <= 0 && remainigDays <= 0 && remainingHours <= 0 && remainingMinutes <= 0) {
  stringRemaining = "now is 2025";
}

console.log(stringRemaining);
$.getElementById("remaining").innerHTML = stringRemaining;

// clock
$.querySelector(".clock .date").innerHTML = new Date().toDateString();
setInterval(() => {
  $.querySelector(".clock .time").innerHTML = new Date().toLocaleTimeString();
}, 1000);
