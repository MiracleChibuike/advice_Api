

// Container for the input Element
let inputField = document.getElementById("inputEl");

// Container for all the buttons
let buttons_Element = document.querySelectorAll("button");

for (let i = 0; i < buttons_Element.length; i++) {
    buttons_Element[i].addEventListener("click", () => {
        const button_Value = buttons_Element[i].textContent;

        if (button_Value === "C") {
            clearAll();
        } else if (button_Value === "=") {
            check_calc(button_Value);
        }else {
            append_Data(button_Value)
        }
    })
    
};



// Function to clearData 
const clearAll = () => {
    inputField.value = ""
};

// Function to run calc
const check_calc = () => {
    try {
        inputField.value = eval(inputField.value)
    } catch  {
        inputField.value = "Incorrect Expression";
    }
};

// Function to append values
const append_Data = (button_Value) => {
    inputField.value += button_Value
};

const clear_One = () => {
    inputField.value = inputField.value.slice(0, -1)
}
