
const student = {
    id: 1,
    student_Name: "James",
    hobbies: ["Cooking", "Reading"],
    isStudent: false,
    age: 25,
    addres: {
        city: "California",
        postal_code: 43557,
        Apt_No: "Room004"
    }
};

console.log(student);
// Converting JS Object to a JSON string
const json_Parse = JSON.stringify(student);

console.log(json_Parse);

const student2 = '{"id" 1, "name": "Miracle", }'

const fetchApi = async () => {
    try {
        const get_Data = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!get_Data.ok) {
            const message = `failed to fetch: ${get_Data.status}, ${get_Data.statusText}`
            throw new Error(message);
            
        }
       const response = await get_Data.json();
       console.log(response);
       const newArray = response.products;
       console.log(newArray);
       const div_Element = document.createElement("div");
       document.body.appendChild(div_Element);
       const ul_Element = document.createElement("ul");
       div_Element.appendChild(ul_Element);
        // newArray.forEach((data) => {
        //     const li_Element = document.createElement("li");
        //     ul_Element.appendChild(li_Element);
        //     li_Element.textContent = data.title;
        // })
    } catch (error) {
        
        console.log(error)
    }
};

fetchApi();

const myArray = [
    "BMW", "Buggati", "Lexus", "A car"
];

const my_object = {
    name: "Buggatti",
    year: 2025,
    color: "red",

}

// Representing JSON objects

