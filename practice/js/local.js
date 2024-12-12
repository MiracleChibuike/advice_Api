

const user = [
    {
        "name": "Miracle",
        "age": 22,
        "isGraduated": true,
        "address": {
            "state": "Imo",
            "city_Living": "Owerri"
        }
    }
];

// console.log(typeof(user))
const many = JSON.stringify(user);
const store = localStorage.setItem("object", many);



const obj = localStorage.getItem("object");
const check_obj = JSON.parse(obj);

console.log(check_obj);

const check_yes = Object.values(check_obj);



const form_Ele = document.getElementById("form_El");

const name_Input = document.getElementById("name");

const email_Input = document.getElementById("email");

const submit_button = document.getElementById("name");
// const store_userName = localStorage.setItem("user", execute);
// const retrieve_name = localStorage.getItem("user");






const read = () => {
    let execute = name_Input.value;
    //   const getUser = localStorage.setItem("user", execute);
    //   const reterive_User = localStorage.getItem("user");
      if (execute === "") {
        alert("Cannot sign up");
      } else {
        const get_D = localStorage.setItem("user", execute)
        alert(`Hello ${execute} your name has been saved`);
      }
    //   console.log(`Stored Name: ${retrieve}`);
};

const load_Name = () => {
          const retrieve = localStorage.getItem("user");
            if (retrieve) {
                name_Input.value = retrieve;
               console.log(`Welcome back ${retrieve}`);
            }
}
form_Ele.addEventListener("submit", (e) => {
  e.preventDefault();
  read();
});

window.addEventListener("DOMContentLoaded", load_Name)



// console.log(store)