
// let current_date = new Date();
// let current_hour = current_date.getHours();
// let current_minute = current_date.getMinutes();

// if (current_hour >= 5 &&  current_hour < 12) {
//     alert(`Good morning dear User. The time is ${current_hour}:${current_minute} AM`)
// } else if (current_hour >= 12 && current_hour < 17) {
//     alert(`Good afternoon dear User. The time is ${current_hour}:${current_minute} PM`)
// }else{
//     alert(`Good evening dear user. the time is ${current_hour}:${current_minute}`)
// }

// const realCountry = "Nigeria";
// const accpeted = "Ghana";
// let userPrompt = prompt('What country are you from', 'Nigeria/Ghana');
// let real_State = realCountry.toLowerCase();
// let real_state_two = accpeted.toLowerCase()

// if (userPrompt == real_State) {
//             alert(
//               `Welcome. The system has indicated you are from ${
//                 realCountry
//               }`
//             );

// } else if (userPrompt == real_state_two) {
//         alert(
//           `Welcome. The system has indicated you are from ${
//             accpeted
//           }`
//         );

// }else{
//     alert(`You are not welcom. The system has indicated you are from ${userPrompt}`)
// }

// Working with Arrays

// let bookNames = [
//     "Otheloo", "Things fall Apart", "Souls Errand", "The fence", "Broken Home"
// ];

// bookNames.push(2);

// console.log(bookNames)

// const num = [
//     10, 20, 30, 40, 70
// ];

// let answer = num.map((nums) => nums / 2);
// console.log(answer);

const realNums = [
    25, 30, 10, 12, 2
];
console.log(realNums.slice(1, 3));
const classNames = [
    "Chidi", "Emmanuel", "Charles", "Mac"
];

const programminlangs = [
    "HTML", "CSS", "JavaScript", "Phython", "Ruby", "C++", "Dart"
];
console.log(programminlangs.slice(3, 6))
// console.log(programminlangs.slice(0, 3))
console.log(classNames.slice(2, 4))
// console.log(realNums)

const foods = [
    "Rice", "Beans", "Noodles", "Spaghetti"
];
// console.log(foods);
console.log(foods.join("."))
// alert(`${foods.join("_")}`)

// alert("You are from Nigeria. \n and Your complexion is black ")

// Working with Strings

let new_name = "Miracle"
// This is a string - Miracle

let new_num = 30;
// This is a number - 30

let num1 = 'Miracle';
let num4 = 20;
// alert(num1 + num4);

let bigNum = 24353535563767657575775575735n;

let largeNum = BigInt("53534634634763763763575378353578357835735783578");

// Undefined
let charles;
console.log(charles);

// let emma = ""

let userDetails = {
    firts_Name: "Miracle",
    last_Name: "Chibuike",
    address: "Ikenegbu Ext"
};

userDetails = null;

let x = 30;
let u = "Miracle"
let y = x;

console.log(typeof(x))
console.log(typeof(u))

// x = 8 - u;
// console.log(x)

let num9 = 10 > 50;
console.log(num9)

console.log(typeof(num9));
console.log(typeof(userDetails))



