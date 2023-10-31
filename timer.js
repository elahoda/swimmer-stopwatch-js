//variables for buttons
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//variables for timer
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zeros

let leadingZeroSeconds = 0;
let leadingZeroMinutes = 0;
let leadingZeroHours = 0;

//variables for set Interval & timer status

let timerInterval = null;
let timerStatus = "stopped";

// Stopwatch function logic
function stopWatch() {
  seconds++;

  // Logic to determine when to increment next value
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  //   let displayTimer = (document.getElementById("timer").innerText =
  //     hours + ":" + minutes + ":" + seconds);
  // }
  // window.setInterval(stopWatch, 1000);

  // If seconds/minutes/hours are only one digit, add a leading 0 to the value

  if (seconds < 10) {
    leadingZeroSeconds = "0" + seconds.toString();
  } else {
    leadingZeroSeconds = seconds;
  }

  if (minutes < 10) {
    leadingZeroMinutes = "0" + minutes.toString();
  } else {
    leadingZeroMinutes = minutes;
  }

  if (seconds < 10) {
    leadingZeroHours = "0" + hours.toString();
  } else {
    leadingZeroHours = hours;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    leadingZeroHours + ":" + leadingZeroMinutes + ":" + leadingZeroSeconds);
}

// Testubg window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);

    //note using innerHTML not innerTextto change the icon

    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerText = "00:00:00";
});
