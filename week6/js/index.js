// let myBio = {
//     firstName: "Miracle",
//     lastName: "Chibuike",
//     Address: "Ikenegbu Extension",
//     fav_food: "Noodles",
//     color: "fair"
// };
// console.log(myBio);



// let currentTime = new Date();
// let current_minute = currentTime.getMinutes()
// let current_hour = currentTime.getHours();
// let current_secs = currentTime.getSeconds()

// if (current_hour < 12) {
//     alert(`Good morning Sir`)
// }else if (current_hour > 12){
//     alert("Good afternoon")
// }

// // let currentTime = new Date();
// // let current_hour = currentTime.getHours();

// // if (current_hour >= 5 && current_hour < 12) {
// //   alert("Good morning, Sir");
// // } else if (current_hour >= 12 && current_hour < 17) {
// //   alert("Good afternoon");
// // } else {
// //   alert("Good evening");
// // }
// function getCurrentTime() {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");

//   return `${hours}:${minutes}:${seconds}`;
// }

// console.log(getCurrentTime());


// console.log(`the time is ${current_hour}:${current_minute}:${current_secs} PM`);

// // console.log(currentTime)
// // alert(myBio)


// let currentTime = new Date();
// let current_hour = currentTime.getHours();
// if (current_hour >= 5 && current_hour < 12) {
//   alert("Good morning, Sir");
// } else if (current_hour >= 12 && current_hour < 17) {
//   alert("Good afternoon");
// } else {
//   alert("Good evening");
// }

var countryAccepted = "Nigeria";
countryAccepted = countryAccepted.toLowerCase();
let messageShow = prompt('What is your Country', "Nigeria?")

if (messageShow == countryAccepted) {
    alert("Greetings dear and welcome \n Wait while you are being re-directed to your route");
    window.location.href = "https://onyiamiracleportfolio.netllify.app/"
} else {
    alert(`Sorry you are not permitted because you have indicated you are from ${messageShow}`)
}





