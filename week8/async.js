
// alert("Hola");

// console.log("Task1");
// console.log("Task2");
// console.log("Task3");

// const greetMessage = (message) => {
//     let new_Message = "get me a tea";
//     alert(`${new_Message}, ${message}`)
// };

// greetMessage("I will get you the tea");

// const message_Async = (task) => {
//     setTimeout(() => {
//         let tak2 = "Go get a rice";
//         console.log(`${tak2}, ${task}`)
//     }, 2000)
// };

// message_Async("I am going to get it");

// const sayHello = () => {
//     alert("I am saying hello");
// }

// const para = document.createElement("button");
// para.textContent = "Click Me";
// document.body.appendChild(para);

// para.addEventListener("mouseover", () => {
//     sayHello();
// })

// CALLBACK FN
// const new_Function = (fnc) => {
//    setTimeout(fnc, 2000)
// };

// const get_Callback = () => {
//     alert("We are together but I am a callback")
// };

// new_Function(get_Callback);

// Promises without error .catch

let data_Display = document.querySelector(".data");
let tag_selector = document.querySelector(".header");

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success")
//     }, 1000)
// });

// promise.then((resolve) => {
//     console.log(resolve)
// });

// // promises with error
// const set_New_Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("The message was passed with Success");
//         reject("It was rejected")
//     }, 3000)
// });

// set_New_Promise
// .then((resolve) => data_Display.textContent = (resolve))
// .catch((reject) => tag_selector.innerHTML = (reject));


const Presync = async () => {
    const message = await new Promise((reject) => {
        setTimeout(() => {
            reject("Error loading data")
        }, 2000)
    });

     console.error(message);
};

Presync();

const fetchData = async () => {
        let url = await fetch("https://dummyjson.com/products");
        const data = await url.json();
        setTimeout(() => {
            data_Display.innerHTML = (data);
        }, 2000)
};



fetchData();


// async function FetchGoods() {
    
// }




