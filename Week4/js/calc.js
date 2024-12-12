

let inputElement = document.getElementById("inputEl");

const buttonsEl = document.querySelectorAll("button");


for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const value_button = buttonsEl[i].textContent;
        // if (value_button === "C") {
        //     clearData()
        // } else

        if (value_button === "C") {
            clearData();
        } else if (value_button === "=") {
            runCalculation()
        }else {
            appendValue(value_button)
        }
    })
    
};

const clearData = () => {
    inputElement.value = ""
};

const runCalculation = () => {
  try {
    inputElement.value = eval(inputElement.value); // Use eval with caution
  } catch {
    inputElement.value = "Invalid Input entered cannot run calculation";
    inputElement.value.style.color = "red"
  }
};

// const runCalculation = () => {
//     inputElement.value = eval(inputElement.value)
// };

const appendValue = (value_button) => {
    inputElement.value += value_button
};


const cancel_1 = document.getElementById("cancel_One");

const clearOne = () => {
     inputElement.value = inputElement.value.slice(0, -1);
};

cancel_1.addEventListener("click", clearOne)




// const runCalculation = () => {

// }