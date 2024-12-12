
// Storing the Inputs
let user_name, user_Email, Form_El, submit_button

Form_El = document.getElementById("form_El");
user_name = document.getElementById("userName");
user_Email = document.getElementById("userEmail");
submit_button = document.getElementById("submit_btn");
let user_Message = document.getElementById("user_display");

// Get userName info
const validate_form = () => {
    let user_text = user_name.value;
    // Store user Text in Local storage
    const store_User = localStorage.setItem("name", user_text)
    if (user_text === "") {
        alert("Error: User name is empty")
    }else{
        // const retrieve = localStorage.getItem("name");
        console.log(localStorage.getItem("name"));
        alert(`Welcome back: ${user_text}`)
       user_Message.innerHTML = user_text;
    }
}

const load = () => {
    const retrieve = localStorage.getItem("name");
    if (retrieve) {
        user_Message.innerHTML = retrieve;
        // alert(`Welcome back ${retrieve}`)
    }
    // console.log(retr)
}

// Prevent from refershing 

Form_El.addEventListener("submit", (e) => {
    e.preventDefault();
    validate_form();
});

window.addEventListener("DOMContentLoaded", load);