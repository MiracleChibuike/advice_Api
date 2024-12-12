

const current_Date = new Date();
let new_Hour = current_Date.getHours();
let new_Minute = current_Date.getMinutes();
let new_Seconds = current_Date.getSeconds();

const checkDate = () => {
    if (new_Hour >=5 && new_Hour < 12) {
        alert(`It is morning now the time is ${new_Hour}:${new_Minute}: AM `)
    }else if (new_Hour >=12 && new_Hour < 17) {
        alert(`It is afternoon now. The time is ${new_Hour}:${new_Minute}: PM`);
    }else{
        alert(`Goodnight The time is ${new_Hour}:${new_Minute}: PM`);
    }
};

// checkDate();

const numbers = [2, 10, 30, 50];

const maps = numbers.map((nums) => nums / 2);
console.log(maps);

// const names = ["Emma", "Chidi", "Charles", "Mac"];
// names.push("Miracle")
// alert(names);

// const names_in_Class = ["Emma", "Chidi", "Charles", "Mac", "Miracle"];
// names_in_Class.pop("Emma");
// console.log(names_in_Class)

const yams = ['JavaScript', 'CSS', 'HTML', 'Python', 'Ruby'];
console.log(yams.slice(1, 3))
// alert(yams)

const currencies = [
    'Dollar',
    'Euros',
    'CAD',
    'AUD'
];

console.log(currencies.join("_"));


const New_currencies = ["Dollar", "Euros", "CAD", "AUD"];
console.log(New_currencies.sort());

const sortNums = [
    "Aba",
    "Owerri",
    "Zafia",
    "Indonesia"
];

console.log(sortNums.sort())

const check_data = [
    10, 4, 30, 95, 24, 55, 30
];

// console.log(checkDate.sort(a, b) => a -b)

