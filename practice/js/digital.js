
// Store Hours Element
let Hours_El = document.getElementById("hours_Time");

// Store Minutes Element
let Minutes_El = document.getElementById("minutes_Time");

// Store Seconds Element
let seconds_El = document.getElementById("seconds_Time");

let ampm = document.getElementById("ampm");

let display_Day = document.querySelector(".currentDate");




function run_Time() {
    const current_Time = new Date();
  let new_Hour = current_Time.getHours();
  let new_Minutes = current_Time.getMinutes();
  let new_seconds = current_Time.getSeconds();
  let new_Day = current_Time.getDate();
  let new_month = current_Time.getMonth() + 1;
  let new_Year = current_Time.getFullYear()
  let AM_PM = "AM";

  if (new_Hour > 12) {
    new_Hour = new_Hour - 12;
    AM_PM = "PM";
  }

  new_Hour = new_Hour < 10 ? "0" + new_Hour : new_Hour;
  new_Minutes = new_Minutes < 10 ? "0" + new_Minutes : new_Minutes;
  new_seconds = new_seconds < 10 ? "0" + new_seconds : new_seconds;

  // console.log(new_Hour > 12)

  Hours_El.textContent = new_Hour;
  Minutes_El.textContent = new_Minutes;
  seconds_El.textContent = new_seconds;
  ampm.textContent = AM_PM;

//   if (new_month = 9) {
//     new_month = "October"
//   }

new_month = new_month.toString()
  display_Day.textContent = `${new_month}/${new_Day}/${new_Year}`;

//   display_Day.textContent = current_Time.getDay()

  setTimeout(() => {
    run_Time();
  }, 1000);
  // ampm.textContent = AM_PM;
};

run_Time()