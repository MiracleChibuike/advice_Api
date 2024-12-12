
let title = document.querySelector(".Age_Calc");
title.innerHTML = "Age Calculator";

let input_Year = document.getElementById("age_year");

let input_month = document.getElementById("age_month");

const display_Ans = document.getElementById("Answer_Display");

let current_Date = new Date();
let current_Month = current_Date.getMonth() + 1;
let current_Year = current_Date.getFullYear();
console.log(current_Year);

//  const checker = current_Year - input_Year.value;
//  const month_Checker = current_Month - input_month.value;
// current_month = current_month.toString()

const run_Calc = document.getElementById("check_Age");


const checkAge = () => {
    let Year_Checker = current_Year - input_Year.value;
    let month_Check = current_Month - input_month.value;
    const birth_Year = parseInt(input_Year.value);
        const birth_month = parseInt(input_month.value);

    if (input_Year.value === "") {
        alert("Please enter your birth date and month");
    }
    else if (input_month.value === "") {
        alert("Please enter your birth date and month");
    }
    else if (birth_Year > current_Year || birth_month < 1 || birth_month > 12) {
        alert("Please enter a valid birth year and month. Either Date or Year is invalid");
        display_Ans.textContent = "Invalid data entered";
        display_Ans.classList.add("errorMsg");
    }
    else{
        try {
            display_Ans.textContent = `You are ${Year_Checker} years old and
            ${month_Check} month(s)`;
            display_Ans.classList.add("successMsg");
        } catch (error) {
            display_Ans.textContent = "Invalid"
        }
    }

    console.log(Year_Checker);
    console.log(month_Check)
   

    input_Year.value = "";
    input_month.value = ""
};


run_Calc.addEventListener("click", checkAge)