
// const greet = (greet_Msg) => {
//     console.log(`${greet_Msg}, I received a message`)
// };

// greet("Hello, Good morning");

// // Asynchronius - because of the use of setTimeout
// const day_Greet =(day_msg) => {
//     setTimeout(() => {
//         alert(`hello, ${day_msg}`)
//     }, 3000)
// };

// day_Greet("The day is Thursday")

// const new_Prom = new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const status = resolve("This message was resolved");
//    }, 3000)
// });

// new_Prom.then((status) => console.log(status));

// For catching errors

// const reject_Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error_msg = reject("Failure loading data.....")
//     }, 3000)
// });

// reject_Promise.catch((error_msg) => console.log(error_msg));

// const agenda = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success_msg = resolve("This message was resolved succesfully");
//         // console.error("This was an error")
//     }, 2000)
// });

// agenda
//   .then((success_msg) => console.log(success_msg))
//   .catch((reject) => console.log(reject));

// CALLBACK FUNCTIONS
let buttonEl = document.createElement("button");
buttonEl.textContent = "Click me";
document.body.appendChild(buttonEl)
const new_Function = (fn) => {
    setTimeout(fn, 3000)
};

const real = () => {
    alert("This is a callback function")
};

let hello_Text = document.getElementById("hello_text");
const call_Back = () => {
    setTimeout(() => {
        hello_Text.textContent = "This is anothe form of callback function"
    }, 3000)
}
// new_Function(real);

buttonEl.addEventListener("mouseover", call_Back)

 


