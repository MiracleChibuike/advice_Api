// const json_Format = {
//     "name": "Miracle",
//     "age": 25,
//     "isMarried": false,
//     "hobbies": ["Coding", "Cooking", "Teaching"],
//     "address": {
//         "city": "Owerri",
//         "postal_Code": 160242
//     }
// };

// // console.log(json_Format);

// const user_String = JSON.stringify(json_Format);

// const user2 = {
//     "age": 25,
//     "isMarried": true,
//     "hobbies": ["Cooking", "Reading", "Teaching", "Coding"],
//     "address": {
//         "city": "Owerri",
//         "postal": 2457
//     }
// };
//     let info = user2.hobbies.push("name");


// const div_Element = document.createElement("div");
// document.body.appendChild(div_Element);

// const ul = document.createElement("ul");
// div_Element.appendChild(ul);
//    user2.forEach((user) => {
//      const li = document.createElement("li");
//      ul.appendChild(li);
//      li.textContent = user.hobbies;
//    })
//    console.log(user_String);
//    console.log(user2)    



// // console.log(new_Json)

// // console.log(user_String);

// Fetch data API

const h2 = document.createElement("h2");
const div = document.createElement("div");
h2.textContent = "Json";
document.body.appendChild(div)
div.appendChild(h2);

const new_Data = '{"name": "Miracle", "isMarried": true, "age": 25}';

const parseIt = JSON.parse(new_Data);

console.log(parseIt);

const large_Data = {
    name: "Miracle",
    age: 25,
    isStudent: false,
    hobbies: ["Reading", "Teaching", "Coding"],
    address: {
        city: "Owerri",
        Apt_No: 75,
        isLivingAlone: false,
        no_Of_Neigbors: 10
    }
};

const convert_string = JSON.stringify(large_Data);

const get_Data = () => {
    setTimeout(() => {
        console.log(convert_string)
    },2000)
};

get_Data();

const new_Api = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            const errorMsg = `Error fetching  data: ${response.status}, ${response.statusText}`
            throw new Error(errorMsg);
            
        }
        const res_data = await response.json();
        const products = res_data.products;
        // console.log(products.lenght)
        console.log(res_data);
                    const ul = document.createElement("ul");

        products.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.title;
             ul.appendChild(li);
        })
                     div.appendChild(ul);
                     console.log(response.status)
                    //  alert("data fetched succesfully")

    } catch (error) {
        alert(`The data can't display because ${error.message}`)
        div.textContent = error.message;
        div.style.textAlign = "center";
        div.style.color = "rgb(150, 10, 10)";
        div.style.fontSize = "1.2rem";
        div.style.display = "grid";
        div.style.placeContent = "center";
        div.style.minHeight = "100vh"
        // h2.textContent = `Error: ${Error.message}`;
        console.error(`Error fetching data;`, error);

    }
};

// new_Api();

const yes = async () => {
   try {
     const res = await fetch(
       "https://api.coindesk.com/v1/bpi/currentprice.json"
     );
     if (!res.ok) {
        const errorText = `Failed to fetch data: ${res.status}, ${res.statusText}`
        throw new Error(errorText);
        
     }
     console.log(res);
     const gotten_data = await res.json();
     const iterate = Object.values(gotten_data.bpi);
     console.log(iterate);
     const section = document.createElement("section");
     document.body.appendChild(section);
     const newUl = document.createElement("ul");
     section.appendChild(newUl);

     div.textContent = "Current Bitcoin rate using the coindesk API"

     iterate.forEach((data) => {
        const new_Li = document.createElement("li");
        new_Li.textContent = `${data.code}: ${data.rate}`
        newUl.appendChild(new_Li)
     })
   } catch (error) {
    div.textContent = `${error.message}`;
    console.error(error);
   }
};

yes()



