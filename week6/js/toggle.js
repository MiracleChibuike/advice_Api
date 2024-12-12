


function new_Function() {
    let realAge = 30;
    const user_data = prompt("What is your age?", "1-20");
    if (user_data >= 1 && user_data < 20) {
        alert(`Your age is valid \n The system indicated
            ${user_data}years of age \n 
            ${realAge}`)
            console.log(realAge);

    }else{
        console.log(`Invalid age ${user_data}`)
    }
};

// new_Function()



const my_Function = () => {
      const user_data = prompt("What is your age?", "1-20");
      if (user_data >= 1 && user_data < 20) {
        alert(`Your age is valid \n The system indicated
            ${user_data} \n10${realAge}
             age`);
      } else {
        console.log(`Invalid age ${user_data}`);
      }
};

// my_Function()

const myArguement = (a, b) => {
   console.log(a * b)
};

myArguement(10, 30)

const extraFunction = (greetings, email) => {
    alert(greetings, email)
};

// extraFunction("hello, Miracle", "myEmail")


// Create a HTML paragraph tag
let createPara = document.createElement("p");
createPara.innerHTML = "hello World";
document.body.appendChild(createPara);

let input_Data = document.getElementById("input_El");

const btn = document.getElementById("btn_Submit");
console.log(btn);

const checkUserInfo = () => {
    if (input_Data.value == "") {
        alert("Input cannot be empty");
        console.log(input_Data.value)
    }else{
        alert(`${input_Data.value}`)
    }
};

let info = document.querySelector(".info_para");
console.log(info);

info.innerHTML = "I am a chnaged paragrapgh now";
info.style.color = "red"

// checkUserInfo()

btn.addEventListener("click", checkUserInfo)