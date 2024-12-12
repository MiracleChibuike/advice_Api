// Store hour Element
let hours_EL = document.getElementById("hours");
// Store minutes_Element
let minutes_El = document.getElementById("Minutes");
// Store seconds Elements
let seconds_El = document.getElementById("seconds");

let Am_Pm = document.getElementById("AM_PM");

let time_Determine = "AM";

const updateTime = () => {
  let current_Date = new Date();

  let current_Hour = current_Date.getHours();
  let current_Minutes = current_Date.getMinutes();
  let current_seconds = current_Date.getSeconds();

  if (current_Hour > 12) {
    time_Determine = "PM";
    Am_Pm.textContent = time_Determine;
  }

  // current_Hour = current_Hour < 10 ? + "0" : current_Hour :current_Hour

  hours_EL.textContent = current_Hour;
  minutes_El.textContent = current_Minutes;
  seconds_El.textContent = current_seconds;

  setTimeout(() => {
    updateTime();
  }, 1000);
};

updateTime();
